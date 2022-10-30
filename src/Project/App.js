import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';
import Home from './src/pages/Home';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
       <Route />
        
      </NavigationContainer>
    </UserProvider>
  );
};//

export default App;
