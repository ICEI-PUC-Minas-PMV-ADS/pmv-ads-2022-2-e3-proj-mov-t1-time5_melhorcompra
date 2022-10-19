import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';




const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'gastos', title: 'Gastos', icon: 'gas-station' },
    { key: 'calculadora', title: 'Calculadora', icon: 'calculator' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    gastos: Gastos,
    calculadora: Calculadora,
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