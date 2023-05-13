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
  ScrollView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {gamepad, group_2, home, imgCart} from '../../Images';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    height: 150,
  },
  GameDisplay: {
    height: 90,
    width: 109,
    borderRadius: 30,
    backgroundColor: '#97DEFF',
  },
  GameTitle: {
    maxWidth: 115,
    maxHeight: 40,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  GameDesc: {
    maxWidth: 115,
    maxHeight: 62,
    fontFamily: 'Inter',
    color: 'black',
    fontSize: 12,
    paddingTop: 2,
    textAlign: 'center',
  },
});

const eventItemsSmall = [
  {
    nama: 'Tebak Kata',
    time: '',
    desc: 'Ini adalah deskripsi Game.',
    navigasi: 'Tebak Kata',
  },
  {
    nama: 'Tebak Gambar',
    time: '',
    desc: 'Ini adalah deskripsi Game.',
    navigasi: 'Tebak Gambar',
  },
  {
    nama: 'Connect 1 to 1',
    time: '',
    desc: 'Ini adalah deskripsi Game.',
    navigasi: '1 to 1',
  },
  {nama: 'Game 4', time: '', desc: 'Ini adalah deskripsi Game.'},
  {nama: 'Game 5', time: '', desc: 'Ini adalah deskripsi Game.'},
];

const renderEventItem = ({item, navigation}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
      }}>
      <TouchableOpacity
        style={styles.GameDisplay}
        onPress={() => navigation.navigate(item.navigasi)}></TouchableOpacity>
      <View>
        <Text style={styles.GameTitle}>{item.nama}</Text>
        <Text style={styles.GameDesc}>{item.desc}</Text>
      </View>
    </View>
  );
};

const PageGame = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 56,
          flexDirection: 'row',
          width: width,
        }}>
        <View
          style={{
            width: 110,
            height: 42,
            backgroundColor: '#62CDFF',
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: width * 0.05,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Inter',
              fontWeight: 'bold',
              color: '#fff',
              alignSelf: 'center',
            }}>
            Kelas X
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={{
            width: 44,
            height: 42,
            backgroundColor: '#AA77FF',
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: width * 0.52,
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>
      <View
        style={{
          height: height - 136,
          marginTop: 10,
        }}>
        <View>
          <FlatGrid
            itemDimension={130}
            data={eventItemsSmall}
            renderItem={({item}) => renderEventItem({item, navigation})}
          />
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
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Video')}>
          <Image source={home}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}>
          <Image source={gamepad}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Event')}>
          <Image source={group_2}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Exchange')}>
          <Image source={imgCart}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageGame;
