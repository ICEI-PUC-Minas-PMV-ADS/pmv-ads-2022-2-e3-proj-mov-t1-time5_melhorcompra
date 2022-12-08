import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Text, List } from 'react-native-paper';
import Container from '../components/Container';
import Header from '../components/Header';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import {
  getLista,
  updateLista,
  insertLista,
  deleteLista,
} from '../services/carrinhos.services';

import axios from 'axios';

const Lista = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};
  const isFocused = useIsFocused();
  const [selected, setSelected] = React.useState('');
  const [lista, setLista] = useState();
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const data = { lista };

  useEffect(() => {
    getLista().then((data) => {
      console.log(data);
      setLista(data);
    });
  }, [isFocused]);

    useEffect(() => {
    updateLista().then((data) => {
      console.log(data);
      setLista(data);
    });
  }, [isFocused]);

  useEffect(
    () =>
      axios
        .get('https://clever-kids-wait-177-83-195-167.loca.lt')
        .then((response) => {
          let newArray = response.data.map((item) => {
            return { key: item.id, value: item.name };
          });
          setData(newArray);
        })
        .catch((e) => {
          console.log(e);
        }),
    []
  );

  const renderItem = ({ item }) => (
    <List.Item
      title={item.descricao}
      description={'Quantidade: ' + item.quantidade}
      left={(props) => (
        <List.Icon
          {...props}
          icon={{
            uri: item.icone,
          }}
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {'R$' + item.preco}{' '}
        </Text>
      )}
      onPress={() => console.log('Quantidade: ' + item.quantidade)}
    />
  );

  return (
    <Container>
      <Header title={'Lista'} goBack={() => navigation.goBack()} />

      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={true}
        boxStyles={{ borderRadius: 20, margin: 20 }}
      />

      <Button
        style={styles.buttonLocation}
        color="black"
        icon={{
          uri: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
        }}
        mode="text"
        uppercase={false}
        labelStyle={{ fontSize: 14 }}
        onPress={() => navigation.navigate('')}>
        <Text>Av. Afonso Vaz de Melo, 1200</Text>
      </Button>

      <View style={styles.viewProdutos}></View>

      <Text style={styles.textProdutos}>Produtos na Lista</Text>
      <View style={styles.list}>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.botoes}>
        <Button onPress={() => 'Salvar'}>Salvar</Button>
        <Button onPress={() => 'Limpar'}>Limpar</Button>
        <Button onPress={() => navigation.push('ProcessedList')}>
          {' '}
          Processar
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonLocation: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
  },

  textProdutos: {
    marginHorizontal: 20,
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },

  viewProdutos: {
    margin: 20,
    marginTop: 5,
    fontSize: 18,
    height: '20vh',
    borderRadius: 30,
    backgroundColor: '#E5E1E1',
  },

  list: {
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 30,
    margin: 20,
    height: '35vh',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lista;
