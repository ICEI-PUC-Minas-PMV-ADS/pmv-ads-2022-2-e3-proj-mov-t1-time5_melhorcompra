import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import {login} from '../services/auth.services';

const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

   const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
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
          placeholder="Entre com seu e-mail"
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
          keyboardType="email-address"
        />
        <Input
          placeholder="Entre com sua senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          color="#E74C3C"       
          onPress={handleLogin}>          
          Entrar
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          color="#ECF0F1"
          onPress={() => navigation.goBack()}>
          Cancelar
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
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 12
  },
});

export default Login;
