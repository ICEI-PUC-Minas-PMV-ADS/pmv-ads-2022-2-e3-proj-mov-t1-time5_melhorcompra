import React, { useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import ButtonRed from '../components/ButtonRed';
import {Text, StyleSheet, View, TextInput, Alert} from 'react-native';
import Body from '../components/Body';
import {changePass} from '../services/auth.services';
import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';


const ChangePass = () => {


    const navigation = useNavigation();
    const [signed, setSigned] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);

    

  
const handleChangePass= () => {

    changePass({
      signed:signed,
      senhaAntiga: senhaAntiga,
      novaSenha: novaSenha,
      confNovaSenha: confNovaSenha
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSenhaAntiga(true);
        setSigned(res.user.senhaAntiga);
        Alert.alert('Senha antiga confere!');
      }
      else{
      if(res.signed.novaSenha === res.signed.confNovaSenha){
        res.send(response);
      } else {
        Alert.alert('Nova senha e confirmação de senha não conferem!')
      }
      }
    });
    
  }
    


  return (
    <Container>
        <Header

    title={'CHANGE PASS'}

    style={{backgroundColor: "#ECF0F1"}}

    goBack ={()=> navigation.goBack()}

    />

     <Container>
    

      <Body>
        <Input
        label="Senha Antiga"
        keyboardType="default"
        value={senhaAntiga}      
        onChangeText={(text) => setSenhaAntiga(text)}
        />
         <Input
        label="Nova Senha"
          keyboardType="default"
          value={novaSenha}
          secureTextEntry
          onChangeText={(text) => setNovaSenha(text)}       
        />       
         <Input
        label="Confirmar Nova Senha"
          keyboardType="default"
          value={confNovaSenha}
          secureTextEntry
          onChangeText={(text) => setConfNovaSenha(text)}       
        />                
              <ButtonRed labelButton="Salvar" onPress={()=>handleChangePass()} />
      </Body>
    </Container>

    
</Container>
        

        
  );
};


export default ChangePass;