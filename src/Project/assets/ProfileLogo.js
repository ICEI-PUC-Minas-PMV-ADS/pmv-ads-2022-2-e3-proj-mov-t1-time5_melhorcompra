import React from 'react';
import {StyleSheet, Image} from 'react-native';

const ProfileLogo = () =>{
  return <Image style={styles.image} source={require('../assets/perfil.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 120,
    height: 120,
    borderRadius: 450
  },
});

export default ProfileLogo;