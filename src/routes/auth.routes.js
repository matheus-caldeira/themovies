import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screen/Auth/SignInScreen'
import ApprovedScreen from '../screen/Auth/ApprovedScreen'

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="Approved"
        component={ApprovedScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;