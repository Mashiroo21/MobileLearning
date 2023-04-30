import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginPage,
  PageGame,
  PageVideo,
  SignInPage,
  EventPage,
  ExchangePage,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Video"
        component={PageVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign In"
        component={SignInPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Game"
        component={PageGame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Event"
        component={EventPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Exchange"
        component={ExchangePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
