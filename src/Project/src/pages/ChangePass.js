import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline, Text } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

const ChangePass = () => {
  const navigation = useNavigation();

  const [idUser, setIdUser] = useState(null);
  const [senhaAntiga, setSenhaAntiga] = useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);
  const [msg, setMsg] = useState(null);

  return (
    <Container>
      <View style={styles.goBack}>
        <Button
          color="black"
          icon="arrow-left-bold"
          mode="text"
          labelStyle={{ fontSize: 20 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <label style={styles.label}>Insira sua antiga senha</label>
      <View style={styles.header}></View>

      <Input
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenhaAntiga(text)}
      />

      <label style={styles.label}>Crie uma nova senha</label>

      <Input
        style={styles.input}
        placeholder="Nova Senha"
        onChangeText={(text) => setNovaSenha(text)}
      />
      <Input
        style={styles.input}
        placeholder="Conferir Nova Senha"
        secureTextEntry
        onChangeText={(text) => setConfNovaSenha(text)}
      />

      <Button
        style={styles.button}
        mode="contained"
        color="#E74C3C"
        onPress={() => navigation.login()}>
        Salvar
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
     borderRadius: 30,
    margin: 20,
    marginBottom: 40,
  },
  header: {
    alignItems: 'center',
  },
  goBack: {
    flexDirection: 'row',
    alignSelf: 'left',
    marginTop: 50,
    margin: 30,
    marginLeft: 10,
  },

  input: {
    marginBottom: 12,
    margin: 13,
    color: 'red',
    height: '8vh',
    fontSize: 12,
  },
  label: {
    color: 'grey',
    marginLeft: 12,
    borderRadius: 10,
  },
});

export default ChangePass;
