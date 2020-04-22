import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import TabNavigator from './routes/TabNavigator';
import PermissionModal from './screens/PermissionModal'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo';


export default function App() {

  const [userLocation, setUserLocation] = useState(null)
  const [userCity, setUserCity] = useState(null)

  async function checkPermission () {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') {
      await Location.getCurrentPositionAsync({})
        .then((data) => setUserLocation(data.coords))
      
      await Location.reverseGeocodeAsync({latitude: userLocation.latitude, longitude: userLocation.longitude})
        .then((data) => setUserCity(data[0].city))
    } else {
      throw new Error("permission denied")
      // Load a notification or select from a list on a modal?
    } 
  }

  useEffect(() => {
    checkPermission()
  }, [])

  let [fontLoaded] = useFonts({
    "SongMyung": require("./assets/fonts/Song_Myung/SongMyung-Regular.ttf"),
    "WorkSans": require("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf"),
  })

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
        }}>
          <NavigationContainer>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : undefined} 
            style={{flex: 1}}
            enabled={false}
            >
              <TabNavigator />
            </KeyboardAvoidingView>
          </NavigationContainer>
        </TouchableWithoutFeedback>
    );
  }
}