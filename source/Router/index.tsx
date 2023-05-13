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
  ProfilPage,
  VideoPlayer,
  TebakKata,
  TebakGambar,
  ConnectGame,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* Main Route */}
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
      <Stack.Screen
        name="Profil"
        component={ProfilPage}
        options={{headerShown: false}}
      />
      {/* Main Route End */}
      {/* Route Page Cabang */}
      <Stack.Screen
        name="PlayVideo"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tebak Kata"
        component={TebakKata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tebak Gambar"
        component={TebakGambar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="1 to 1"
        component={ConnectGame}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
