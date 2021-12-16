import React from 'react';
import { View, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 5 : StatusBar.currentHeight;

import { useAuth } from '../context/auth'
import { useTheme } from '../context/theme'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

function Routes() {
  const { signed } = useAuth();
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: theme.background
      }}
    >
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </View>
  )
}

export default Routes;