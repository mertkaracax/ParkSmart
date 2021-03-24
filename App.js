import * as React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-search-bar';
import ReservationScreen from './screens/ReservationScreen';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReservationScreen"
          component={ReservationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MapScreen = ({navigation}) => {
  return (
    <View style={styles.BackView}>
      <SearchBar
        style={styles.bar}
        useRef="searchBar"
        textFieldBackgroundColor="gray"
        placeholder="Arama"
        textColor="white"
        showsCancelButtonWhileEditing={true}
      />
      <MapView
        showsTraffic={true}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        customMapStyle={mapStyle}
        style={{flex: 1}}
      />

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: 'white',
        }}>
        <TouchableOpacity style={styles.Icons}>
          <Icon name="location-arrow" size={35} color="#0E68AD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Icon name="sign-in" size={30} color="#86949D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('SignUp')}>
          <Icon name="user-plus" size={25} color="#86949D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icons}
          onPress={() => navigation.navigate('ReservationScreen')}>
          <Icon name="car" size={25} color="#86949D" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icons}>
          <Icon name="info" size={30} color="#86949D" />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.text1}>Menü</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ReservationScreen')}>
        <Text style={styles.text2}>Rezervasyon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.text2}>Giriş</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text2}>Kayıt</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    flex: 1,
    backgroundColor: '#171818',
  },
  bar: {
    height: 30,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 4,
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 5,
  },
  text2: {
    marginLeft: 7,
    fontSize: 20,
    color: '#31A8E9',
  },
  Icons: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#1A232B',
    height: 50,
    width: 380,
    justifyContent: 'center',
    marginBottom: 2,
    alignSelf: 'center',
  },
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#36363a',
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#0e8eb9',
      },
      {
        visibility: 'on',
      },
      {
        weight: 8,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#5183a9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#f6e123',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export default MyStack;
