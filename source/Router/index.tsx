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
  Starttk,
  Starttg,
  Startco,
  Soaltk,
  Resulttk,
} from '../pages';
import Soaltg from '../pages/Game/TebakGambar/PageSoaltg';
import Resulttg from '../pages/Game/TebakGambar/Resulttg';

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
      {/* Tebak Kata */}
      <Stack.Screen
        name="Tebak Kata"
        component={TebakKata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start Tebak Kata"
        component={Starttk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soal Tebak Kata"
        component={Soaltk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hasil Tebak Kata"
        component={Resulttk}
        options={{headerShown: false}}
      />
      {/* End Tebak Kata */}
      {/* Tebak Gambar */}
      <Stack.Screen
        name="Tebak Gambar"
        component={TebakGambar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start Tebak Gambar"
        component={Starttg}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soal Tebak Gambar"
        component={Soaltg}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hasil Tebak Gambar"
        component={Resulttg}
        options={{headerShown: false}}
      />
      {/* End Tebak Gambar */}
      {/* Connect 1 to 1 */}
      <Stack.Screen
        name="1 to 1"
        component={ConnectGame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Start 1 to 1"
        component={Startco}
        options={{headerShown: false}}
      />
      {/* End 1 to 1 */}
    </Stack.Navigator>
  );
};

export default Router;
