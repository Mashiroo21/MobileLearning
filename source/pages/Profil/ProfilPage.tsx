import React, {useState} from 'react';
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
  ScrollView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({});

const ProfilPage = ({navigation}) => {
  return (
    <View>
      <Text>Ini Page Profil</Text>
    </View>
  );
};

export default ProfilPage;
