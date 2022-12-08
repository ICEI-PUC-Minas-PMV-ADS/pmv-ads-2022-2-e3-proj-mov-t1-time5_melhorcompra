import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Inicio from './Inicio';
import Profile from './Profile';
import Lista from './Lista';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'inicio', title: 'Inicio', icon: 'home'},  
    { key: 'lista', title: 'Lista', icon: 'clipboard-list'},
    { key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    lista: Lista,    
    profile: Profile,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#E74C3C' }} 
    />
  );
};

export default Home;