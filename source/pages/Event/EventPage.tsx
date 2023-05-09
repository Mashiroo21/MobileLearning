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
  },
  MultiplayerView: {
    height: height * 0.125,
    width: width * 0.8,
    borderRadius: 30,
    backgroundColor: '#97DEFF',
    alignSelf: 'center',
    marginTop: 20,
  },
  MultiplayerText: {
    position: 'absolute',
    bottom: 10,
    fontFamily: 'inter',
    color: 'black',
    fontWeight: 'bold',
    marginStart: 20,
  },
  wrap: {
    width: width * 0.8,
    height: height * 0.25,
    alignSelf: 'center',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#3C84AB',
  },
  dot: {
    margin: 3,
    color: '#D9D9D9',
  },
});

const images = [
  'https://i0.wp.com/blog.dimensidata.com/wp-content/uploads/Mengenal-Macam-Jenis-Jaringan-Komputer-dan-Pengertiannya.jpg',
  'https://www.mas-software.com/wp-content/uploads/2021/06/Jaringan-Komputer-Adalah.jpg',
];

const eventItems = [
  {nama: 'Multiplayer 1', desc: 'Ini adalah deskripsi Multiplayer.'},
  {nama: 'Multiplayer 2', desc: 'Ini adalah deskripsi Multiplayer.'},
  {nama: 'Multiplayer 3', desc: 'Ini adalah deskripsi Multiplayer.'},
  {nama: 'Multiplayer 4', desc: 'Ini adalah deskripsi Multiplayer.'},
  {nama: 'Multiplayer 5', desc: 'Ini adalah deskripsi Multiplayer.'},
];

const EventPage = ({navigation}) => {
  const [imgActive, setimgActive] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.widht,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    setScrollPosition(scrollPosition);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 56,
        }}></View>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled={true}
        snapToInterval={150}
        snapToAlignment={'start'}
        style={{
          height: height - 126,
        }}>
        <View style={{height: height * 0.25}}>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View>
          {eventItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.MultiplayerView}>
                <Text style={styles.MultiplayerText}>{item.nama}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

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
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Game')}></TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}></TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Exchange')}></TouchableOpacity>
      </View>
    </View>
  );
};

export default EventPage;
