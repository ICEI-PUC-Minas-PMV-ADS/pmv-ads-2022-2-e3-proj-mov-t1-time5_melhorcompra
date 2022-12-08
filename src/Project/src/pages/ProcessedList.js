import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { TextInput, Button, Headline, List, Text } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { useUser } from '../contexts/UserContext';
import {
  getProcessedList,
  getQtdProcessedList,
} from '../services/processedList.services';

import { useNavigation } from '@react-navigation/native';

const ProcessedList = () => {
  const navigation = useNavigation();
  const idUsuario = 1; //useUser();
  const [listProcessed, setListProcessed] = useState([]);
  const [numLista, setNumLista] = useState(1);
  var [proximaListaSeta, setProximaListaSeta] = useState(false);
  var [anteriorListaSeta, setAnteriorListaSeta] = useState(true);
  var [quantidadeDeLista, setQuantidadeDeLista] = useState(0);
  var [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    getProcessedList(idUsuario, numLista).then((dados) => {
      setListProcessed(dados);
      let soma = 0;
      for (let i = 0; i < dados.length; i++) {
        soma = parseFloat(dados[i].preco) + soma;
      }
      setValorTotal(soma);
    });
    getQtdProcessedList(1).then((dados) => {
      setQuantidadeDeLista(dados);
    });
  }, [numLista, idUsuario]);

  const proximaLista = () => {
    if (numLista >= quantidadeDeLista) {
      setProximaListaSeta(true);
    } else {
      setNumLista(numLista + 1);
      setAnteriorListaSeta(false);
    }
  };
  const voltarLista = () => {
    if (numLista > 1) {
      setNumLista(numLista - 1);
      setProximaListaSeta(false);
    } else {
      setAnteriorListaSeta(true);
    }
  };

  const renderItem = ({ item }) => (
    <List.Item
      title={'1x ' + item.produto}
      description={item.estabelecimento}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'black'}
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
      onPress={() => console.log(item.produto)}
    />
  );

  return (
    <Container>
      <Header title={''} goBack={() => navigation.goBack()} />
      <Body>
        <View>
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
        </View>
        <View style={styles.textButton}>
          <Text style={styles.textEstablishment}>ESTABELECIMENTOS</Text>
          <Button
            color="black"
            icon="filter-variant"
            mode="text"
            labelStyle={{ fontSize: 20 }}
          />
        </View>

        <View style={styles.bodyList}>
          <View style={styles.btn}>
            <Button
              color="black"
              icon="arrow-left-bold"
              mode="text"
              disabled={quantidadeDeLista == 0 ? true : anteriorListaSeta}
              labelStyle={{ fontSize: 20 }}
              onPress={() => voltarLista()}
            />
          </View>
          <Text>Lista {numLista}</Text>
          <View style={styles.btn}>
            <Button
              color="black"
              icon="arrow-right-bold"
              mode="text"
              disabled={quantidadeDeLista == 0 ? true : proximaListaSeta}
              labelStyle={{ fontSize: 20 }}
              onPress={() => proximaLista()}
            />
          </View>
        </View>
        <View style={styles.list}>
          <FlatList
            data={listProcessed}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.textTotal}>Valor Total: R${valorTotal}</Text>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 450,
    backgroundColor: '#E5E1E1',
    borderRadius: 10,
    justifyContent: 'center',
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
  },
  bodyList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    paddingBottom: 10,
    paddingRight: 50,
  },
  textEstablishment: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLocation: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    alignSelf: 'left',
  },
  goBack: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginTop: 30,
    marginBottom: 10,
  },
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingEnd: 8,
    paddingStart: 13,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
});

export default ProcessedList;
