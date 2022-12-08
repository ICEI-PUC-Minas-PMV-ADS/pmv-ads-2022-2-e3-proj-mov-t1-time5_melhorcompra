import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import ButtonRed from '../components/ButtonRed';
import ButtonGrey from '../components/ButtonGrey';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import { login } from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName, setUserid } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {


    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        setUserid(res.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  }

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>

      <Body>
        <Input
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          keyboardType="default"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonRed labelButton="Entrar" onPress={handleLogin} />
        <ButtonGrey
          labelButton="Cancelar"
          onPress={() => navigation.goBack()}
        />
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

export default Login;
