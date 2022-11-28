import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountStackScreen from './Account';
import Home from '../pages/Home';
import ListaStackScreen from './ListaRoute';
import BarCode from '../pages/BarCode';

const Tab = createMaterialBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFF"
      barStyle={{ backgroundColor: '#E74C3C' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="storefront" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista"
        component={ListaStackScreen}
        options={{
          tabBarLabel: 'Nova Lista',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BarCode"
        component={BarCode}
        options={{
          tabBarLabel: 'Código de Barras',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
