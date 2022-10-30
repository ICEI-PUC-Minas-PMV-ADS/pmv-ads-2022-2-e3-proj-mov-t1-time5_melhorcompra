import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import ProfileLogo from '../components/ProfileLogo';

import { useNavigation } from '@react-navigation/native';

const ProcessedList = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Body>
        <View style={styles.goBack}>
          <Button
            color="black"
            icon="arrow-left-bold"
            mode="text"
            labelStyle={{ fontSize: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>
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
            onPress={() => navigation.goBack()}
          />
        </View>


        <View style={styles.bodyList}>
          <View style={styles.btn}>
          <Button
            color="black"
            icon="arrow-left-bold"
            mode="text"
            labelStyle={{ fontSize: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.list}>
          <Text style={{textAlign:'center'}}>Lista</Text>
        </View>
        <View style={styles.btn}>
          <Button
            color="black"
            icon="arrow-right-bold"
            mode="text"
            labelStyle={{ fontSize: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>
        
        
        </View>
        <View style={styles.footer}>
            <Text style={styles.textTotal}>VALOR TOTAL</Text>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    height: 430,
    backgroundColor: '#E5E1E1',
    borderRadius: 10,
    justifyContent: 'center',
  },
  bodyList: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    flex: 0.95
  },
  btn: {
    flex: 0.2
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    paddingBottom: 10,
    paddingRight: 50
  },
  textEstablishment: {
    fontSize: 16,
    fontWeight: 'bold'
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
    marginTop: 40,
    marginBottom: 10,
  },
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingEnd: 8,
    paddingStart: 13
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ProcessedList;
