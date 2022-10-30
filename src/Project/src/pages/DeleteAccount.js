import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const DeleteAccount = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.goBack}>
        <Button
          color="black"
          icon="arrow-left-bold"
          mode="text"
          labelStyle={{ fontSize: 20 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <label style={styles.label}>Deletar conta</label>

      <Button
        style={styles.button}
        mode="contained"
        color="#E74C3C"
        onPress={() => navigation.login()}>
        Confirmar
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignSelf: 'left',
    marginTop: 50,
    margin: 30,
    marginLeft: 10,
  },
  button: {
    borderRadius: 20,
    lexDirection: 'column',
    height: '7%',
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },
  label: {
    alignSelf: 'center',
    fontSize: '3vh',
    marginTop: 50,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
});

export default DeleteAccount;
