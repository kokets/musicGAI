import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Create from './components/Create';
import Home from './components/Home';
const Stack = createNativeStackNavigator();
// a
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
    <Stack.Screen name='Create' component={Create}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
