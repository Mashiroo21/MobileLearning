import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={coba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const coba = () => {
  <View>
    <Text>Coba</Text>
  </View>;
};

export default Router;
