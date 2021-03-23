import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const ReservationScreen = (navigation) => {
  return (
    <ScrollView style={styles.BackView}>
      <View style={{flex: 1, padding: 13}}>
        <Text style={styles.text1}>İşlemler</Text>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Telefon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Adres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Rezervasyon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Web Site</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Özellikler</Text>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Kredi Kartı İle Ödeme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Engelli Park Alanı</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Elektrikli Şarj İstasyonu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>LPG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Oto Yıkama</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Ücretler</Text>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Bilgi yok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.islemler}>
          <Text style={styles.text2}>Bilgi yok</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BackView: {
    flex: 1,
    backgroundColor: 'black',
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 5,
  },
  text2: {
    marginLeft: 7,
    fontSize: 20,
    color: '#31A8E9',
  },
  islemler: {
    backgroundColor: '#1A232B',
    height: 50,
    width: 380,
    justifyContent: 'center',
    marginBottom: 2,
  },
});

export default ReservationScreen;
