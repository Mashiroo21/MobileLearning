import react, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
  },
  wrapper: {
    height: height,
    justifyContent: 'center',
  },
  desc: {
    fontFamily: 'Futura',
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    marginTop: 5,
  },
  startbtn: {
    width: width * 0.3,
    height: 50,
    backgroundColor: '#62CDFF',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  starttitle: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});

const Starttk = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Kamu Sudah Siap?</Text>
        <Text style={styles.desc}>Tebak Kata: Microwave Link</Text>
        <TouchableOpacity
          style={styles.startbtn}
          onPress={() => navigation.replace('Soal Tebak Kata')}>
          <Text style={styles.starttitle}>Mulai!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Starttk;
