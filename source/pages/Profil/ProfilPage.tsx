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
import {
  board,
  clock,
  fire,
  group_1,
  group_2,
  lght,
  trophy,
  event1,
  event2,
  event3,
  event4,
} from '../../Images';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileHead: {
    marginTop: 10,
    width: width,
    flexDirection: 'row',
  },
  profileTextWrap: {
    marginLeft: width * 0.05,
  },
  Username: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    width: 243,
    maxHeight: 40,
    color: 'black',
  },
  UserID: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: 'black',
    marginTop: 3,
  },
  commonText: {
    fontFamily: 'Inter',
    fontSize: 15,
    maxWidth: 175,
    color: '#AC9C9C',
    marginTop: 3,
  },
  profile: {
    backgroundColor: '#AA77FF',
    width: 80,
    height: 75,
    borderRadius: 20,
    marginLeft: width * 0.125,
  },
  madeLine: {
    height: 1.75,
    backgroundColor: 'black',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
  },
  madeLine2: {
    height: 1.75,
    backgroundColor: 'black',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 12,
    marginLeft: -width * 0.05,
  },
  statbox: {
    borderColor: '#BDB1B1',
    borderWidth: 1.5,
    width: 160,
    height: 68,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  statBold: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 115,
    maxHeight: 21,
  },
  statCom: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#AC9C9C',
    maxWidth: 115,
    maxHeight: 18,
  },
  FavBox: {
    backgroundColor: '#97DEFF',
    width: 335,
    height: 85,
    borderRadius: 30,
  },
  FavTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    width: 243,
    maxHeight: 40,
    color: 'black',
    bottom: 5,
    position: 'absolute',
  },
  profileicon: {
    alignSelf: 'center',
    marginTop: 5,
    marginRight: 5,
  },
  staticon: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  thumb: {
    alignSelf: 'center',
    width: 335,
    height: 85,
    borderRadius: 30,
  },
});

const eventItems = [
  {nama: 'Video 1', desc: 'Ini adalah deskripsi Multiplayer.', image: event1},
  {nama: 'Video 2', desc: 'Ini adalah deskripsi Multiplayer.', image: event2},
  {nama: 'Video 3', desc: 'Ini adalah deskripsi Multiplayer.', image: event3},
  {nama: 'Video 4', desc: 'Ini adalah deskripsi Multiplayer.', image: event4},
  {nama: 'Video 5', desc: 'Ini adalah deskripsi Multiplayer.', image: event1},
];

const ProfilPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHead}>
        <View style={styles.profileTextWrap}>
          <Text style={styles.Username}>User</Text>
          <Text style={styles.UserID}>User16508</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={clock} style={styles.profileicon}></Image>
            <Text style={styles.commonText}>Bergabung Januari 2021</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={group_1} style={styles.profileicon}></Image>
            <Text style={styles.commonText}>0 teman</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profile}></TouchableOpacity>
      </View>
      <View style={styles.madeLine}></View>
      <ScrollView>
        <View
          style={{
            marginLeft: width * 0.05,
            marginTop: 10,
          }}>
          <Text style={styles.Username}>STATISTIK</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: -width * 0.05,
              justifyContent: 'center',
            }}>
            <View style={styles.statbox}>
              <View style={{flexDirection: 'row'}}>
                <Image source={fire} style={styles.staticon}></Image>
                <View>
                  <Text style={styles.statBold}>5</Text>
                  <Text style={styles.statCom}>Runtunan Hari</Text>
                </View>
              </View>
            </View>
            <View style={styles.statbox}>
              <View style={{flexDirection: 'row'}}>
                <Image source={board} style={styles.staticon}></Image>
                <View>
                  <Text style={styles.statBold}>10</Text>
                  <Text style={styles.statCom}>Total Kemenangan</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: -width * 0.05,
              justifyContent: 'center',
            }}>
            <View style={styles.statbox}>
              <View style={{flexDirection: 'row'}}>
                <Image source={lght} style={styles.staticon}></Image>
                <View>
                  <Text style={styles.statBold}>13</Text>
                  <Text style={styles.statCom}>Total XP</Text>
                </View>
              </View>
            </View>
            <View style={styles.statbox}>
              <View style={{flexDirection: 'row'}}>
                <Image source={trophy} style={styles.staticon}></Image>
                <View>
                  <Text style={styles.statBold}>Perunggu</Text>
                  <Text style={styles.statCom}>Liga</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.madeLine2}></View>
        </View>
        <View style={{marginTop: 15, marginLeft: width * 0.05}}>
          <Text style={styles.Username}>FAVORIT</Text>
          {eventItems.map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -width * 0.05,
              }}>
              <TouchableOpacity style={styles.FavBox}>
                <Image style={styles.thumb} source={item.image}></Image>
              </TouchableOpacity>
              <Text style={styles.FavTitle}>{item.nama}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilPage;
