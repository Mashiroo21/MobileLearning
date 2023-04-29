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

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  menubutton: {
    width: 44,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#C9EEFF',
    marginHorizontal: 20,
  },
});

const PageVideo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View
        style={{
          height: height - 126,
        }}>
        <View
          style={{
            height: 177,
            backgroundColor: '#e5e5e5',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 90,
              width: 120,
              borderRadius: 30,
              backgroundColor: '#97DEFF',
              marginLeft: 18,
            }}></TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: 70,
          backgroundColor: '#62CDFF',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Game')}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
      </View>
    </View>
  );
};

export default PageVideo;