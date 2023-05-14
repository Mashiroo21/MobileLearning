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
    justifyContent: 'center',
    alignItems: 'center',
  },
  MultiplayerView: {
    height: height * 0.1,
    width: width * 0.8,
    borderRadius: 30,
    backgroundColor: '#97DEFF',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
  MultiplayerText: {
    position: 'absolute',
    alignSelf: 'center',
    fontFamily: 'inter',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginStart: 20,
  },
  wrap: {
    width: width * 0.8,
    height: height * 0.25,
    alignSelf: 'center',
  },
  namaPage: {
    fontFamily: 'inter',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  backWrap: {
    width: 110,
    height: 42,
    backgroundColor: '#62CDFF',
    alignSelf: 'flex-start',
    borderRadius: 14,
    marginTop: 10,
    marginLeft: width * 0.05,
    justifyContent: 'center',
  },
  pagenameText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  profilbtn: {
    width: 44,
    height: 42,
    backgroundColor: '#AA77FF',
    alignSelf: 'flex-start',
    borderRadius: 14,
    marginTop: 10,
    marginLeft: width * 0.525,
    justifyContent: 'center',
  },
});

const eventItems = [
  {
    nama: '5G',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Microwave Link',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'IPV4 dan 6',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Teknologi Serat Optik',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Sistem Sensor',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'IoT',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Smart Device',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Smart Home',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
  {
    nama: 'Smart City',
    desc: 'Ini adalah deskripsi Materi.',
    navigasi: 'Start Tebak Kata',
  },
];

const EventPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          flexDirection: 'row',
          width: width,
          backgroundColor: '#85CDFD',
        }}>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity
          style={styles.backWrap}
          onPress={() => navigation.navigate('Game')}>
          <Text style={styles.pagenameText}>Tebak Kata</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={styles.profilbtn}></TouchableOpacity>
      </View>
      <ScrollView
        style={{
          height: height - 126,
          marginTop: 10,
        }}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Inter',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Pilih Materi
          </Text>
        </View>
        <View>
          {eventItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.navigasi)}
                style={styles.MultiplayerView}>
                <Text style={styles.MultiplayerText}>{item.nama}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default EventPage;
