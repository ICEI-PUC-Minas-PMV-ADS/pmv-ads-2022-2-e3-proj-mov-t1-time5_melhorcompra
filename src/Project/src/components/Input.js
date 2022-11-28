import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {StyleSheet } from "react-native";

const Input = ({label, keyboardType}) => {
  //const [text, setText] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      label={label}
      mode="outlined"     
      keyboardType={keyboardType}

    />
  );
}

const styles = StyleSheet.create({
  input: {
      height: 40,
  },
});


export default Input;
