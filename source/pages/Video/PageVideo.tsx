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
import {
  gamepad,
  group_2,
  home,
  imgCart,
  video1,
  video2,
  video3,
  video4,
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
  videotitle: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: 'black',
    maxHeight: 40,
    maxWidth: width - 178,
  },
  videodescriptions: {
    fontSize: 12,
    fontFamily: 'Inter',
    color: 'black',
    maxWidth: width - 178,
    maxHeight: 72,
    paddingTop: 5,
  },
  thumb: {
    alignSelf: 'center',
  },
});

const VideoList = ({desc, title, image}) => {
  return (
    <View
      style={{
        height: 150,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#efefef',
        borderWidth: 1,
      }}>
      <TouchableOpacity
        style={{
          height: 90,
          width: 120,
          borderRadius: 30,
          backgroundColor: '#97DEFF',
          marginLeft: 18,
        }}>
        <Image source={image} style={styles.thumb}></Image>
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Text style={styles.videotitle}>{title}</Text>
        <Text style={styles.videodescriptions}>{desc}</Text>
      </View>
    </View>
  );
};

const PageVideo = ({navigation}) => {
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
            Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 44,
            height: 42,
            backgroundColor: '#62CDFF',
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: 8,
            justifyContent: 'center',
          }}></TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profil')}
          style={{
            width: 44,
            height: 42,
            backgroundColor: '#AA77FF',
            alignSelf: 'flex-start',
            borderRadius: 14,
            marginTop: 10,
            marginLeft: width * 0.4,
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>
      <ScrollView
        style={{
          height: height - 126,
          marginTop: 10,
        }}>
        <View
          style={{
            height: 150,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            flexDirection: 'row',
            borderColor: '#efefef',
            borderWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PlayVideo')}
            style={{
              height: 90,
              width: 120,
              borderRadius: 30,
              backgroundColor: '#97DEFF',
              marginLeft: 18,
            }}>
            <Image source={video4} style={styles.thumb}></Image>
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <Text style={styles.videotitle}>Pengenalan TKJ</Text>
            <Text style={styles.videodescriptions}>
              Video ini berisi tentang pengenalan mata pelajaran TKJ
            </Text>
          </View>
        </View>
        <VideoList
          title="Judul Video"
          desc="Ini adalah contoh dari deskripsi Video di samping"
          image={video1}
        />
        <VideoList
          title="Judul Video yang Agak Panjang"
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini coba saya buat agak panjang sebagai contoh."
          image={video2}
        />
        <VideoList
          title="Judul Video yang Sangat Sangat Panjang."
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini dibuat sangat panjang sekali untuk menguji maksimal height dari deskripsi video, apakah kira kira masih bisa tersusun rapi?"
          image={video3}
        />
        <VideoList
          title="Judul Video yang Sangat Sangat Panjang."
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini dibuat sangat panjang sekali untuk menguji maksimal height dari deskripsi video, apakah kira kira masih bisa tersusun rapi?"
          image={video4}
        />
        <VideoList
          title="Judul Video yang Sangat Sangat Panjang."
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini dibuat sangat panjang sekali untuk menguji maksimal height dari deskripsi video, apakah kira kira masih bisa tersusun rapi?"
          image={video1}
        />
        <VideoList
          title="Judul Video yang Sangat Sangat Panjang."
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini dibuat sangat panjang sekali untuk menguji maksimal height dari deskripsi video, apakah kira kira masih bisa tersusun rapi?"
          image={video2}
        />
        <VideoList
          title="Judul Video yang Sangat Sangat Panjang."
          desc="Ini adalah contoh dari deskripsi Video di samping. Deskripsi ini dibuat sangat panjang sekali untuk menguji maksimal height dari deskripsi video, apakah kira kira masih bisa tersusun rapi?"
          image={video3}
        />
      </ScrollView>
      <View
        style={{
          height: 70,
          backgroundColor: '#62CDFF',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.menubutton}>
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
        <TouchableOpacity
          style={styles.menubutton}
          onPress={() => navigation.replace('Exchange')}>
          <Image source={imgCart}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageVideo;
