import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage, View, Image } from 'react-native';
import TabNavigator from './routes/TabNavigator';
import PermissionModal from './screens/PermissionModal'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { useFonts } from '@use-expo/font'
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export default function App() {

  const [isSplashReady, setIsSplashReady] = useState(false)
  const [isAppReady, setIsAppReady] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [userCity, setUserCity] = useState(null)


  // SPLASHSCREEN
  //  - Load Fonts
  //  - Do the below permission check 
  //    - if permission has been provided, jump to permission-2-Granted and do all calculations while splashscreen is loading.

  // PERMISSIONS
  // 1. Check if this is initial load of App
  //    - Make a localStorage of initialLoad = true
  //    - Show "Ask for Location Permission Screen". **Screen Component**
  //      - if Denied, Select Municipality Screen will provide 1 of the 2 options
  //      - save the selected municipality to a state && localStorage
  //    - Once selection is resolved, change localStorage of initialLoad = false
  
  // if permission has been Provided (userLocation state will be used to determine for conditional rendering e.g. userLocation===null means distance is hidden)
  // 2-Granted. Get userLocation lat + long (no need to save this to localStorage)
  //    - determine municipality
  //      - save this to a state
  //    - Firebase call to get Data of selected municipality, and saved to a state
  //    - Do calculation of all distances from each DropOffCenter and store into a state.

  // if permission has been Denied:
  // 2-Denied.
  //    - retrieve municipality info from localStorage
  //    - Firebase call to get Data of selected municipality, and saved to a state.

  // Once the below has been all resolved, isAppReady = true / hideSplashScreen.
  //  - FontsLoaded
  //  - PermissionChecked, and selected municipality has been determined (distance calc if granted)
  //  - Firebase call to get Data (items and locations) and data has been set.
  //  - Get Top Searches

  // LocalStorage:
  //  - initialAppLoad = true
  //  - userMunicipality = null

  // StatesRequired:
  //  - isSplashReady
  //  - isAppReady
  //  - userMunicipality (locationPermissionGranted ? calc from userLocation : fetch from localStorage)
  //  - itemData
  //  - depotData
  //    - calculatedDistances (!locationPermissionGranted = null)
  //  - topSearch results (for main screen only)


  async function checkPermission () {
    const { status, permissions:{ location: { ios } } } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') {
      await Location.getCurrentPositionAsync({})
        .then((data) => setUserLocation(data.coords))
        .catch((error) => console.log(error))
      
      console.log(userLocation)

      await Location.reverseGeocodeAsync({latitude: userLocation.latitude, longitude: userLocation.longitude})
        .then((data) => {setUserCity(data[0].city); console})
        .catch((error) => console.log(error))

      storeData()
    } else {
      // null
      throw new Error("permission denied")
      // Load a notification or select from a list on a modal?
    } 
  }

  const storeData = async () => {
    try {
        await AsyncStorage.setItem('userLocation', JSON.stringify(userLocation));
        console.log("userlocation Set")
    } catch (error) {
        console.log("failed to save in storeData asyncStorage")
    }
  };

  const retrieveData = async () => {
    console.log("retrieving")
    try {
        const value = await AsyncStorage.getItem('userLocation');
        if (value !== null) {
            setUserLocation(JSON.parse(value))
        }
    } catch (error) {
        return new Error("retrieving failed")
    }
  };

  const cacheResourcesAsync = async () => {
    const images = [require('./assets/splash.png')];
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  }

  useEffect(() => {
    SplashScreen.preventAutoHide();
    checkPermission()
    cacheResourcesAsync() // ask for resources
      .then(() => setIsSplashReady(true)) // mark resources as loaded
      .catch(error => console.error(`Unexpected error thrown when loading:
      ${error.stack}`));
    // retrieveData()
  }, [])

  const [fontLoaded] = useFonts({
    "SongMyung": require("./assets/fonts/Song_Myung/SongMyung-Regular.ttf"),
    "WorkSans": require("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf"),
    "WorkSansBold": require("./assets/fonts/Work_Sans/static/WorkSans-SemiBold.ttf"),
  })

  if (!isSplashReady) {
    return null
  } else if (!isAppReady || !fontLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0945DE" }}>
        <Image
          style={{ flex: 1, resizeMode:"contain", width: undefined, height: undefined }}
          source={require('./assets/splash.png')}
          onLoadEnd={() => {
            // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
            console.log('Image#onLoadEnd: hiding SplashScreen');
            SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
            setIsAppReady(true)
          }}
          fadeDuration={0} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300`
        />
      </View>
    );
  }
  else {
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