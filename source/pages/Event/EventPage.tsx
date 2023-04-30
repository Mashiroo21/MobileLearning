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

const eventItemsSmall = [
  {nama: 'Event1', time: '', desc: 'Ini adalah deskripsi event.'},
  {nama: 'Event2', time: '', desc: 'Ini adalah deskripsi event.'},
  {nama: 'Event3', time: '', desc: 'Ini adalah deskripsi event.'},
  {nama: 'Event4', time: '', desc: 'Ini adalah deskripsi event.'},
  {nama: 'Event5', time: '', desc: 'Ini adalah deskripsi event.'},
];

const renderEventItem = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: 284,
          height: 184,
          backgroundColor: '#97DEFF',
          borderRadius: 30,
        }}></TouchableOpacity>
      <View>
        <Text
          style={{
            textAlign: 'center',
          }}>
          {item.nama}
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}>
          {item.desc}
        </Text>
      </View>
    </View>
  );
};

const EventScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    setScrollPosition(scrollPosition);
  };
};

const EventPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 56,
        }}></View>
      <View
        style={{
          height: height - 126,
        }}>
        <FlatGrid
          horizontal={true}
          itemDimension={300}
          data={eventItemsSmall}
          renderItem={renderEventItem}
        />
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
