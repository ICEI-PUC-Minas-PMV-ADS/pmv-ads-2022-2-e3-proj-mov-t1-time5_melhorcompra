import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import ProfileLogo from '../components/ProfileLogo';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Body>
        <View style={styles.goBack}>
        </View>
        <View style={styles.profileLogo}>
          <ProfileLogo />
        </View>
        <View style={styles.name}>
          <Text>Maria</Text>
        </View>
        <Button
          style={styles.button}
          color="black"
          icon="arrow-right-bold"
          mode="text"
          uppercase={false}
          labelStyle={{ fontSize: 14 }}
          onPress={() => navigation.navigate('ListaProfile')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}>
          <Text>Minhas Listas</Text>
        </Button>
        <Button
          style={styles.button}
          color="black"
          icon="arrow-right-bold"
          mode="text"
          uppercase={false}
          labelStyle={{ fontSize: 14 }}
          onPress={() => navigation.navigate('ChangePass')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}>
          <Text>Mudar Senha</Text>
        </Button>
        <Button
          style={styles.button}
          color="black"
          icon="arrow-right-bold"
          mode="text"
          uppercase={false}
          labelStyle={{ fontSize: 14 }}
          onPress={() => navigation.navigate('DeleteAccount')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}>
          <Text>Deletar Conta</Text>
        </Button>
        <View style={styles.footer}>
          <Button
            style={styles.buttonExit}
            color="#E5E1E1"
            mode="contained"
            uppercase={false}
            labelStyle={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
            onPress={() => {}}>
            <Text>Sair</Text>
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 3,
    marginBottom: 3,
  },
  buttonExit: {
    borderRadius: 30,
    margin: 20,
    marginBottom: 40,
  },
  profileLogo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  goBack: {
    flexDirection: 'row',
    alignSelf: 'left',
    marginTop: 40,
    marginBottom: 10,
  },
  name: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 15,
    marginBottom: 50,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Profile;
