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
  gamepad,
  group_2,
  imgCart,
  home,
  item1,
  item2,
  item3,
  itemm3,
} from '../../Images';

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
  EventView: {
    width: 284,
    height: 184,
    borderRadius: 30,
    backgroundColor: '#97DEFF',
  },
  RecommendItemWrap: {
    flexDirection: 'row',
    maxHeight: height * 0.28,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  RecommendItem: {
    width: 96,
    height: 90,
    borderRadius: 30,
    backgroundColor: '#97DEFF',
    marginHorizontal: 15,
  },
  RecItemTitle: {
    maxWidth: 88,
    maxHeight: 18,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'inter',
    textAlign: 'center',
    color: 'black',
  },
  RecItemDesc: {
    maxWidth: 88,
    height: 54,
    fontSize: 14,
    fontFamily: 'Inter',
    textAlign: 'center',
    color: 'black',
    paddingTop: 5,
  },
  RecPrice: {
    alignSelf: 'center',
    backgroundColor: '#97DEFF',
    width: 72,
    height: 29,
    borderRadius: 30,
    marginTop: 10,
  },
  PriceFont: {
    fontFamily: 'Impact',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AA77FF',
    textAlign: 'right',
    marginEnd: 10,
  },
  allItemWrap: {
    marginTop: 20,
    alignSelf: 'center',
  },
  allItem: {
    width: 129,
    height: 115,
    backgroundColor: '#97DEFF',
    borderRadius: 30,
  },
  allItemTitle: {
    width: width * 0.5,
    height: 18,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  allItemDesc: {
    width: width * 0.5,
    height: 53,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
    marginTop: 5,
  },
  allPrice: {
    alignSelf: 'flex-start',
    backgroundColor: '#97DEFF',
    width: 72,
    height: 29,
    borderRadius: 30,
    marginTop: 10,
  },
  wrap: {
    width: width * 0.9,
    height: height * 0.175,
    alignSelf: 'center',
    marginTop: 15,
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
  thumb1: {
    alignSelf: 'center',
  },
  thumb2: {
    alignSelf: 'center',
    height: 115,
    width: 129,
  },
});

const allItems = [
  {
    nama: 'Item 1',
    desc: 'Ini adalah deskripsi Item.',
    price: '100',
    image: item1,
  },
  {
    nama: 'Item 2',
    desc: 'Ini adalah deskripsi Item.',
    price: '100',
    image: item2,
  },
  {
    nama: 'Item 3',
    desc: 'Ini adalah deskripsi Item.',
    price: '100',
    image: item3,
  },
  {
    nama: 'Item 4',
    desc: 'Ini adalah deskripsi Item.',
    price: '100',
    image: item1,
  },
  {
    nama: 'Item 5',
    desc: 'Ini adalah deskripsi Item.',
    price: '100',
    image: item2,
  },
];
const recItems = [
  {
    nama: 'Nama Item',
    desc: 'Misal Wallpaper Tema.',
    price: '100',
    image: item1,
  },
  {nama: 'Nama Item', desc: 'Misal Avatar Basic.', price: '100', image: item2},
  {
    nama: 'Nama Item',
    desc: 'Misal Item Boost Score.',
    price: '100',
    image: item3,
  },
];
const images = [
  'https://i0.wp.com/blog.dimensidata.com/wp-content/uploads/Mengenal-Macam-Jenis-Jaringan-Komputer-dan-Pengertiannya.jpg',
  'https://www.mas-software.com/wp-content/uploads/2021/06/Jaringan-Komputer-Adalah.jpg',
];

const ExchangePage = ({navigation}) => {
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
          flexDirection: 'row',
          width: width,
        }}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 42,
            borderColor: '#62CDFF',
            borderWidth: 4,
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: width * 0.05,
            justifyContent: 'center',
          }}>
          <Text style={styles.PriceFont}>999999</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={{
            width: 44,
            height: 42,
            backgroundColor: '#AA77FF',
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: width * 0.5,
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>
      {/* Start Bagian Item */}
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled={true}
        snapToInterval={150}
        snapToAlignment={'start'}
        style={{
          height: height - 126,
          marginTop: 10,
        }}>
        {/* Bagian Recommended Item */}
        <View style={styles.RecommendItemWrap}>
          {recItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.RecommendItem}>
                <Image style={styles.thumb1} source={item.image}></Image>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Text style={styles.RecItemTitle}>{item.nama}</Text>
                <Text style={styles.RecItemDesc}>{item.desc}</Text>
              </View>
              <TouchableOpacity style={styles.RecPrice}>
                <Text style={styles.PriceFont}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {/* Recommended ITem End */}
        {/* Bagian Highlight Item */}
        <View>
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
        {/* Highlight Item End */}
        {/* All Item */}
        <View style={styles.allItemWrap}>
          {allItems.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}
              key={index}>
              <TouchableOpacity style={styles.allItem}>
                <Image style={styles.thumb2} source={item.image}></Image>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: 'center',
                  width: width * 0.6,
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.allItemTitle}>{item.nama}</Text>
                <Text style={styles.allItemDesc}>{item.desc}</Text>
                <TouchableOpacity style={styles.allPrice}>
                  <Text style={styles.PriceFont}>{item.price}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        {/* All Item End */}
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
          onPress={() => navigation.replace('Video')}>
          <Image source={home}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Game')}>
          <Image source={gamepad}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Event')}>
          <Image source={group_2}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menubutton}>
          <Image source={imgCart}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExchangePage;
