import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, List } from 'react-native-paper';
import Container from '../components/Container';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';

const Lista = ({ route }) => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState('');

  const data = [
    { key: '1', value: 'Arroz' },
    { key: '2', value: 'Feijão' },
    { key: '3', value: 'Café' },
    { key: '4', value: 'Açucar' },
    { key: '5', value: 'Leite' },
  ];

  useEffect(
    () =>
      axios
        .get('https://jsonplaceholder.typicode.com/users')
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
        <List.Item
          title="Arroz"
          description="R$ 6,00"
          left={(props) => <List.Icon {...props} icon="rice" />}
        />

        <List.Item
          title="Feijão"
          description="R$ 7,00"
          left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
        />

        <List.Item
          title="Café"
          description="R$ 12,00"
          left={(props) => <List.Icon {...props} icon="coffee" />}
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
