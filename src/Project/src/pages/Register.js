import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import ButtonRed from '../components/ButtonRed';
import ButtonGrey from '../components/ButtonGrey';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

        console.log(name);
    console.log(password);
        console.log(email);
    

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
          label="Nome"
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <ButtonRed labelButton="Cadastrar" onPress={handleRegister} />
        <ButtonGrey labelButton="Cancelar" onPress={() => navigation.goBack()} />        
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 12
  },
});

export default Register;
