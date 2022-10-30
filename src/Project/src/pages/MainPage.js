import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>

      <Body>
        <Button
          style={styles.button}
          mode="contained"
          color="#E74C3C"
          onPress={() => navigation.navigate('Login')}>
          Entrar
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          color="#ECF0F1"
          onPress={() => navigation.navigate('Register')}>
          Cadastre-se
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    borderRadius: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 12,
  },
});

export default MainPage;
