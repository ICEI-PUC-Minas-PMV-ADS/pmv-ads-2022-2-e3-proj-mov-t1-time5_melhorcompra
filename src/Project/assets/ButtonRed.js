import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const ButtonRed = ({labelButton, onPress}) => {
    return (    
    <Pressable style={styles.button} mode="contained" onPress={onPress}>
      <Text style={styles.text}>{labelButton}</Text>
    </Pressable>
    
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginBottom: 5,
    padding:5,  
    borderRadius: 16,
    backgroundColor: '#E74C3C',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default ButtonRed;