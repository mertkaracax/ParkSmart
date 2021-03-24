import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ic_launcher from 'demo/images/ic_launcher.png';
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

const SignUp = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 0}}>
      <View style={styles.BackView}>
        <View style={styles.top}>
          <Image
            source={ic_launcher}
            style={{width: 60, height: 65, marginBottom: 5}}
          />
          <Text style={styles.text3}>PARKSMART</Text>
        </View>
        <View style={styles.bottom}>
          <TextInput
            style={styles.inp}
            placeholder="E-POSTA"
            placeholderTextColor="white"
            color="white"></TextInput>
          <TextInput
            style={styles.inp}
            placeholder="PAROLA"
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={styles.inp}
            placeholder="PAROLA TEKRAR"
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={styles.inp}
            placeholder="AD"
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={styles.inp}
            placeholder="SOYAD"
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={styles.inp}
            placeholder="TELEFON"
            placeholderTextColor="white"></TextInput>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text1}>KAYIT OL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.text2}>Zaten bir hesabınız var mı?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    height: '100%',
    backgroundColor: '#1A232B',
    paddingVertical: 0,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: '25%',
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 40,
  },
  bottom: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 24,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  inp: {
    backgroundColor: '#1A232B',
    padding: 10,
    height: 40,
    width: '75%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1A232B',
    borderBottomColor: '#068BE9',
    marginBottom: 9,
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
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  btn2: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default SignUp;
