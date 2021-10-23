import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
