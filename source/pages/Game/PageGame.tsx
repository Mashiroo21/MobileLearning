import React from 'react';
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
import {FlatGrid} from 'react-native-super-grid';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  menubutton: {
    width: 44,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#C9EEFF',
    marginHorizontal: 20,
  },
  itemContainer: {
    justifyContent: 'center',
    height: 150,
  },
});

const PageGame = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View
        style={{
          height: height - 126,
        }}></View>

      <View
        style={{
          height: 70,
          backgroundColor: '#62CDFF',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Video')}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
      </View>
    </View>
  );
};

export default PageGame;
