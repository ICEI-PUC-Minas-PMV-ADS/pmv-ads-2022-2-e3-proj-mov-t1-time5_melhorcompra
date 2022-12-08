import React, { useState } from 'react';
import { Text,View, StyleSheet, Button, Alert} from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import ButtonRed from '../components/ButtonRed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteAccount } from '../services/auth.services';
import {useUser} from '../contexts/UserContext';
const DeleteAccount = () => {
  const navigation = useNavigation();
 const {userid} = useUser();
      
     

  return (
        <Container>
        <Header

    title={'DELETEACCOUNT'}

    style={{backgroundColor: "#ECF0F1"}}

    goBack ={()=> navigation.goBack()}

    />

 <View>
        <ButtonRed labelButton="Deletar" onPress={() => deleteAccount(userid)} />
      </View>

</Container>
        
  );
};




export default DeleteAccount;