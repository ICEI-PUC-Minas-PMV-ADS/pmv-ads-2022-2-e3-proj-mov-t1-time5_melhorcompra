import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeleteAccount from '../pages/DeleteAccount';
import ChangePass from '../pages/ChangePass';
import Profile from '../pages/Profile';

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator initialRouteName="Profile">
      <AccountStack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
        }}
      />
      <AccountStack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{
          header: () => null,
        }}
      />
      <AccountStack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{
          header: () => null,
        }}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
