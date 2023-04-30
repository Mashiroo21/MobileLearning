import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Router from './Router';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#62CDFF" barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default App;
