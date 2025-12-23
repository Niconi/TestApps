import React from 'react';
import {useColorScheme} from 'react-native';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RootStack} from './src/screens/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStack />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
