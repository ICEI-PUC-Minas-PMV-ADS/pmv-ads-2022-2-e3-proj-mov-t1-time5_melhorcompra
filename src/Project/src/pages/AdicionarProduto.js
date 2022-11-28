import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; //hook
import Input from '../components/Input';
import Container from '../components/Container';
import Body from '../components/Body';
import ButtonRed from '../components/ButtonRed';
import Header from '../components/Header';

const AdicionarProduto = () => {
  //navegação
  const navigation = useNavigation();

  const [arquivo, setArquivo] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const uploadArquivo = async (e) => {
    e.preventDefault();
    console.log('Salvar');
    console.log(arquivo);
  };

  return (
    <Container style={styles.container}>
      <Header title={'Adicionar Produto'} goBack={() => navigation.goBack()} />
      <Body>
        <Button
          style={styles.buttonLocation}
          color="black"
          icon="map-marker"
          mode="text"
          uppercase={false}
          labelStyle={{ fontSize: 15 }}
          onPress={() => navigation.navigate('')}>
          <Text>Av. Afonso Vaz de Melo, 1200</Text>
        </Button>
        <View>
          <Text style={styles.produto}> Produto </Text>

          <Input
            label="Nome"
            value={nome} 
            onChangeText={(text) => setNome(text)}
          />
          <Input
            label="Descrição"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
          />
          <Input
            label="Valor"
            value={valor}
            keyboardType='decimal-pad'
            onChangeText={(text) => setValor(text)}
          />
         
          <label style={styles.arquivo}> Carregar arquivo: </label>
          <input
            style={styles.inputArquivo}
            type="file"
            name={arquivo}
            onChange={(e) => setArquivo(e.target.files[0])}
          />
          
          <ButtonRed labelButton="Enviar" onPress={uploadArquivo} />
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  buttonLocation: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
  },

  produto: {
    flexDirection: 'row',
    fontFamily: 'Arial',
    fontSize: 19,
    color: '#000000',
    fontWeight: 700,
    padding:10,

  },
  arquivo: {
    padding:10,
    fontFamily: 'Arial',
    fontSize: 19,
    fontWeight: 700,

  },
  inputArquivo:{
    padding:10,
  }
});

export default AdicionarProduto;
