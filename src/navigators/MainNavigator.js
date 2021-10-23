import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import Form from '../screens/Form';
import Success from '../screens/Success';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
