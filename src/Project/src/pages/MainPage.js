import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import ButtonRed from '../components/ButtonRed';
import ButtonGrey from '../components/ButtonGrey';

import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>

      <Body>
        <ButtonRed labelButton="Entrar" onPress={() => navigation.navigate('Login')} />
        <ButtonGrey labelButton="Cadastrar" onPress={() => navigation.navigate('Register')} />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 12,
  },
});

export default MainPage;
