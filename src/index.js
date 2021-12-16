import React from 'react'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import Context from './context'
import Routes from './routes';

const prefix = Linking.createURL('app/')

function AppHome() {
  return (
    <NavigationContainer
      linking={{
        prefixes: [ prefix ],
        config: {
          screens: {
            Approved: "approved"
          }
      }}}
    >
      <SafeAreaView style={{flex: 1}}>
        <StatusBar style="light" />
        <Context>
          <Routes />
        </Context>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppHome;