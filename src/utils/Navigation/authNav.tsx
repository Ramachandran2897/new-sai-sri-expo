/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../../modules/credencialModule/LoginPage';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default AuthStack