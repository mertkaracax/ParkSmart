import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ic_launcher from 'demo/images/ic_launcher.png';
import Delta from 'demo/images/Delta.png';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.BackView}>
      <View style={styles.top}>
        <Image source={ic_launcher} style={{width: 60, height: 70}} />
        <Text style={styles.text3}>PARKSMART</Text>
      </View>
      <View style={styles.bottom}>
        <TextInput
          style={styles.inp}
          placeholder="E-POSTA"
          placeholderTextColor="white"></TextInput>
        <TextInput
          style={styles.inp}
          placeholder="PAROLA"
          placeholderTextColor="white"></TextInput>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text1}>GİRİŞ YAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.text2}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.Icons}>
          <Icon name="location-arrow" size={30} color="#86949D" />
          <Text style={{color: 'white'}}>Harita</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Icon name="sign-in" size={30} color="#0E68AD" />
          <Text style={{color: '#86949D'}}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('SignUp')}>
          <Icon name="user-plus" size={30} color="#86949D" />
          <Text style={{color: '#86949D'}}>Kayıt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('ReservationScreen')}>
          <Icon name="car" size={30} color="#86949D" />
          <Text style={{color: '#86949D'}}>İşlemler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icons}>
          <Icon name="info" size={30} color="#86949D" />
          <Text style={{color: '#86949D'}}>Hakkımızda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    flex: 1,
    backgroundColor: '#1A232B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 415,
    backgroundColor: 'black',
    marginBottom: 70,
  },
  text3: {
    color: 'white',
    fontSize: 24,
  },
  bottom: {
    flex: 3,
    paddingTop: 20,
    alignItems: 'center',
  },
  navbar: {
    flex: 0.4,
    flexDirection: 'row',
  },
  Icons: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171818',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  inp: {
    padding: 10,
    backgroundColor: '#1A232B',
    height: 50,
    width: 320,
    justifyContent: 'center',
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#1A232B',
    borderBottomColor: '#068BE9',
    marginBottom: 30,
  },

  btn: {
    marginTop: 10,
    backgroundColor: '#0E68AD',
    width: 320,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn2: {
    marginTop: 20,
  },
});

export default LoginScreen;
