import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  SafeAreaView,
  SectionList,
} from 'react-native';
import {
  Searchbar,
  TextInput,
  Button,
  Headline,
  Text,
  FAB,
} from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const Lista = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Container>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
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

      <Text style={styles.textProdutos}>Principais Produtos</Text>
      <View style={styles.viewProdutos}>

      </View>

      <Text style={styles.textProdutos}>Produtos na Lista</Text>
      <View style={styles.list}>
        <Text> Teste </Text>
      </View>

      <View style={styles.botoes}>
        <Button onPress={() => console.log ('Salvar')}>
          Salvar
        </Button>
        <Button onPress={() => console.log ('Limpar')}>
          Limpar
        </Button>
        <Button onPress={() => navigation.push('ProcessedList').console.log ('Processar')}>
          Processar
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 30,
    margin: 20,
  },

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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 20,
    backgroundColor: '#E5E1E1',
    height: '35vh',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Lista;
