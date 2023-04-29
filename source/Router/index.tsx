import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage, PageGame, PageVideo, SignInPage} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Video" component={PageVideo} />
      <Stack.Screen name="Sign In" component={SignInPage} />
      <Stack.Screen name="Game" component={PageGame} />
    </Stack.Navigator>
  );
};

export default Router;
