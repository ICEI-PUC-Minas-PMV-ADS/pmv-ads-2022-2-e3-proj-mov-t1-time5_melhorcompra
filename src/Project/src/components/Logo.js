import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/logo-melhor-compra2.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 260,
    height: 128,
    borderRadius: 30
  },
});

export default Logo;