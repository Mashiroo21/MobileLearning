import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Resulttg = ({navigation, route}) => {
  const {score, total} = route.params;
  const nilai = (score / total) * 100;

  const handleUp = () => {
    navigation.replace('Tebak Gambar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.title}>Nilai Kamu adalah:</Text>
        <Text style={styles.nilai}>{nilai}</Text>
        <Text style={styles.keterangan}>
          Kamu menjawab {score} dari {total} pertanyaan dengan benar
        </Text>
        <TouchableOpacity style={styles.nextbtn} onPress={handleUp}>
          <Text style={styles.btnfont}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62CDFF',
  },
  questionBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: 'white',
    marginTop: height * 0.025,
    borderRadius: 40,
  },
  title: {
    fontFamily: 'futura',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 10,
  },
  nilai: {
    fontFamily: 'futura',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 10,
  },
  keterangan: {
    fontFamily: 'futura',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: width * 0.7,
    marginVertical: 10,
  },
  nextbtn: {
    width: width * 0.325,
    height: 34,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#AA77FF',
    borderRadius: 30,
    marginTop: 10,
  },
  btnfont: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'futura',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Resulttg;
