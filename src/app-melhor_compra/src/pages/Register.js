import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
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
          placeholder="Cadastre seu nome"
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          placeholder="Cadastre seu e-mail"  
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
          keyboardType="email-address"
        />
        <Input
          placeholder="Cadastre uma senha"  
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />        
        <Button
          style={styles.button}
          mode="contained"
          color="#E74C3C"  
          onPress={handleRegister}>
          CADASTRAR
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
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 12
  },
});

export default Register;
