import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Judul: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    marginTop: 10,
    marginHorizontal: 10,
  },
  garis: {
    height: 3,
    backgroundColor: '#efefef',
    marginTop: 20,
  },
  deskripsi: {
    marginTop: 10,
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 20,
    marginHorizontal: 10,
  },
});

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View
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
              Kembali
            </Text>
          </TouchableOpacity>
        </View> */}
        <View>
          <YoutubePlayer
            height={230}
            videoId={'aGOEwkZ5rH8'}
            onReady={() => this.setState({loading: false})}
          />
        </View>
        <ScrollView>
          <View>
            <Text style={styles.Judul}>Pengenalan TKJ</Text>
          </View>
          <View></View>
          <View style={styles.garis}></View>
          <View>
            <Text style={styles.deskripsi}>
              Video ini berisikan tentang pengenalan mata pelajaran TKJ. Buat
              kalian yang belum tahu apa itu TKJ, simak videonya sampai habis
              ya! dan buat kalian yang udah tau tentang TKJ juga tetep boleh
              nonton kok, buat memperkuat pengetahuan kalian!
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default VideoPlayer;
