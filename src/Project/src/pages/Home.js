import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import BarCode from './BarCode';
import Inicio from './Inicio';
import Profile from './Profile';
import Lista from './Lista';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'inicio', title: 'Inicio', icon: 'home', color:'#E74C3C'},  
    { key: 'lista', title: 'Lista', icon: 'clipboard-list', color:'#E74C3C'},
    { key: 'barcode', title: 'Barcode', icon: 'barcode-scan', color:'#E74C3C'},
    { key: 'profile', title: 'Profile', icon: 'account', color:'#E74C3C'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    barcode: BarCode,
    lista: Lista,    
    profile: Profile,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;