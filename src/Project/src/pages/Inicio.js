import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { getLista } from '../services/lista.services';

import { useUser } from '../contexts/UserContext';

const Inicio = () => {
  const navigation = useNavigation();
  const { name, userid } = useUser();
  const [lista, setLista] = useState();

  useEffect(() => {
    getLista(userid).then((dados) => {
      console.log(dados);
      setLista(dados);
    });
  }, [userid]);

  const renderItem = ({ item }) => (
    <List.Item
      title={'Lista ' + item.id}
      description={'Valor total: R$ ' + item.preco}
      left={(props) => <List.Icon {...props} icon="clipboard-list" />}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {''}
          {item.dt_de_cadastro}
          {''}
        </Text>
      )}
      onPress={() => navigation.navigate('Lista', { item })}
    />
  );
  return (
    <Container>
      <Header title={'Olá, ' + name} />
      <Body>
        <Button
          color="black"
          icon="map-marker"
          mode="text"
          uppercase={false}
          style={styles.buttonLocation}
          onPress={() => navigation.navigate('')}>
          <Text>Av. Afonso Vaz de Melo, 1200</Text>
        </Button>
        <View>
          <Text style={styles.textList}> Minhas Listas </Text>
        </View>

        <View style={styles.background}>
          <FlatList
            data={lista}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.addList}>
          <Text style={styles.newList}>Criar Lista </Text>
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.navigate('Lista')}
          />
        </View>
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  buttonLocation: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textList: {
    flexDirection: 'row',
    fontFamily: 'Arial',
    fontSize: 19,
    color: '#000000',
    fontWeight: 700,
    padding: 10,
    marginLeft: 30,
  },
  newList: {
    flexDirection: 'row',
    fontFamily: 'Arial',
    fontSize: 19,
    color: '#000000',
    fontWeight: 700,
  },
  background: {
    width: '90%',
    height: '65%',
    backgroundColor: '#E5E1E1',
    borderRadius: 20,
    alignSelf: 'center',
    margin: 10,
  },
  addList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  fab: {
    backgroundColor: '#E74C3C',
  },
});
export default Inicio;
