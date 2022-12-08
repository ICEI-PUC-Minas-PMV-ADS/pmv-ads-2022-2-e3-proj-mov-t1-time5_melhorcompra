import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from '../pages/Lista';
import ProcessedList from '../pages/ProcessedList'

const ListaStack = createNativeStackNavigator();

function ListaStackScreen() {
  return (
    <ListaStack.Navigator initialRouteName="Lista">
      <ListaStack.Screen
        name="Lista"
        component={Lista}
        options={{
          header: () => null,
        }}
      />
      <ListaStack.Screen
        name="ProcessedList"
        component={ProcessedList}
        options={{
          header: () => null,
        }}
      />
    </ListaStack.Navigator>
  );
}

export default ListaStackScreen;
