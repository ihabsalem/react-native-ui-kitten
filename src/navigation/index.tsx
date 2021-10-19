/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomePageScreen from '../screens/HomePageScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePageScreen}
          options={{title: 'Quicko'}}
        />
        <Stack.Screen name="not-found" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
