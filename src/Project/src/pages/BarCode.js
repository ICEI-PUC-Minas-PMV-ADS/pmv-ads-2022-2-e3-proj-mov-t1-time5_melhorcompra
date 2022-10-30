import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text} from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const BarCode = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Body>
        <Text> BAR CODE </Text>
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

export default BarCode;
