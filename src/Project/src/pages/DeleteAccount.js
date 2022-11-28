import React, { useState } from 'react';
import { Text} from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native';

const DeleteAccount = () => {
  const navigation = useNavigation();
  

  return (
        <Container>
        <Header

    title={'DELETEACCOUNT'}

    style={{backgroundColor: "#ECF0F1"}}

    goBack ={()=> navigation.goBack()}

    />

</Container>
        
  );
};

export default DeleteAccount;