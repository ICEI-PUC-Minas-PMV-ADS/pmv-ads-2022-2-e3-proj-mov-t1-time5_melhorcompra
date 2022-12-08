import React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header style={{backgroundColor: "#E74C3C"}}>
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};
export default Header;
