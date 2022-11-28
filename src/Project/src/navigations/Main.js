import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Lista from '../pages/Lista';
import DeleteAccount from '../pages/DeleteAccount';
import ChangePass from '../pages/ChangePass';
import ListaStackScreen from './ListaRoute';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
       <Stack.Screen
        name="Lista"
        component={ListaStackScreen}
        options={{
          header: () => null,
        }}
      />
        <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
    
  );
};

export default Main;
