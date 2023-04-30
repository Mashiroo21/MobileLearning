import React, {Component} from 'react';
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
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fixtotext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          height: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./bglogin.png')}
          style={{height: 1000, width: '100%'}}
        />
      </View>

      <View
        style={{
          marginTop: 34,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Kantumruy',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            color: '#000000',
            fontFamily: 'Kantumruy',
            fontSize: 11,
            paddingVertical: 5,
          }}>
          Log in to continue
        </Text>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            paddingVertical: 15,
            borderRadius: 90,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#a29e9e',
              marginHorizontal: 30,
            }}>
            Email Address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            paddingVertical: 15,
            borderRadius: 90,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#a29e9e',
              marginHorizontal: 30,
            }}>
            Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#362fd9',
            paddingVertical: 15,
            borderRadius: 90,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}
          onPress={() => navigation.navigate('Video')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontFamily: 'kantumruy',
              fontSize: 16,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#FFFBFB',
              fontFamily: 'kantumruy',
              fontSize: 12,
            }}>
            Forgot Your Password?
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 190,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#a29e9e',
            fontSize: 12,
          }}>
          or connect with
        </Text>
        <View style={styles.fixtotext}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10B3FF',
              height: 16,
              width: 76,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 12.5,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#F1EFEF',
                fontSize: 9,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#10B3FF',
              height: 16,
              width: 68,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 12.5,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#F1EFEF',
                fontSize: 9,
              }}>
              Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            marginHorizontal: 5,
            color: '#A29E9E',
            fontFamily: 'kantumruy',
            fontSize: 11,
          }}>
          Dont have account?
        </Text>
        <TouchableOpacity
          style={{
            width: 50,
          }}
          onPress={() => navigation.replace('Sign In')}>
          <Text
            style={{
              color: '#10B3FF',
              fontFamily: 'kantumruy',
              fontSize: 11,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
