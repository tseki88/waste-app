import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { AsyncStorage, View, ActivityIndicator } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { useFonts } from '@use-expo/font'
import { AppLoading} from 'expo';

import InitialAppLoadScreen from './screens/InitialAppLoadScreen';
import LandingScreen from './screens/LandingScreen';
// import tempData from './firebaseTemplate.json'
import { UpdateMunicipalityContext, DataContext, UserMunicipalityContext } from './context/globalContext';

import firebaseDB from './firebase'

export default function App() {

  // StatesRequired:
  //  - isSplashReady
  //  - isAppReady
  //  - userMunicipality (locationPermissionGranted ? calc from userLocation : fetch from localStorage)
//    - calculatedDistances (!locationPermissionGranted = null)
  //  - topSearch results (for main screen only)
  //    - will be fetched from firebase for most recent "top searches"

  // const [isSplashReady, setIsSplashReady] = useState(false)
  
  const [isAppReady, setIsAppReady] = useState(false)
  const [initialAppLoad, setInitialAppLoad] = useState(true)
  const [userMunicipality, setUserMunicipality] = useState(null)
  const [topSearch, setTopSearch] = useState([])
  const [municipalityData, setMunicipalityData] = useState(null)

  let tempData
  // LocalStorage:
  //  - initialAppLoad = true
  //  - userMunicipality = null

  // SPLASHSCREEN
  //  - Load Fonts
  const [fontLoaded] = useFonts({
    "SongMyung": require("./assets/fonts/Song_Myung/SongMyung-Regular.ttf"),
    "WorkSans": require("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf"),
    "WorkSansBold": require("./assets/fonts/Work_Sans/static/WorkSans-SemiBold.ttf"),
  })

  //  - Do the below permission check 
  //    - if permission has been provided, jump to permission-2-Granted and do all calculations while splashscreen is loading.

  // PERMISSIONS
  // 1. Check if this is initial load of App
  //    - Make a localStorage of initialLoad = true
  //    - Show "Ask for Location Permission Screen". **Screen Component**
  //      - if Denied, Select Municipality Screen will provide 1 of the 2 options
  //      - save the selected municipality to a state && localStorage
  //    - Once selection is resolved, change localStorage of initialLoad = false
  
  useEffect(() => {
    
    const initialAppLoadCheck = async () => {
      console.log("retrieving asyncStorage - initialAppLoadCheck")
      try {
        const value = await AsyncStorage.getItem('initialAppLoad');
        if (value === "false") {
          return setInitialAppLoad(false)
        }
      } catch (error) {
        return new Error("retrieve failed")
      }
    };
    initialAppLoadCheck()
  },[])
  
  
  useEffect(() => {

    // Call for firebase -> version
    const dataVersion = firebsaeDB.ref("version")

    const versionCheck = async () => {
      console.log("checking data version")
      try {
        const localVersion = await AsyncStorage.getItem("version");

        if (value === undefined || parseFloat(localVersion.once("value")) < parseFloat(dataVersion)) {
          // if version is not up to date OR doesn't exist yet, then call firebase for dataset (including topSearch)
          //    save data to asyncstorage (except topsearch)
          //    save data as tempData
          await AsyncStorage.setItem("version", dataVersion)

          firebaseDB.ref("municipality").once("value")
            .then((response) => {
              await AsyncStorage.setItem("municipalityData", JSON.stringify(response))
              tempData = response
            })
        } else {
          // else get dataset from asyncstorage
          //    set to data-state
          const localJson = await AsyncStorage.getItem("municipalityData")
          tempData = JSON.parse(localJson)
        }

        // pull topSearch numbers
        firebaseDB.ref("topSearch").once("value")
        .then((response) => {
          for (let each in response) {
            each.sort((a,b) => {
              return b.count > a.count ? -1 : 1
            })
          }
          
          setTopSearch(response)
        })

      }
      catch(error) {
        return new Error("retrieve failed")
      }
    }

    
  }, [])


  // if permission has been Provided (userLocation state will be used to determine for conditional rendering e.g. userLocation===null means distance is hidden)
  // 2-Granted. Get userLocation lat + long (no need to save this to localStorage)
  //    - determine municipality
  //      - save this to a state
  //    - Firebase call to get Data of selected municipality, and saved to a state
  //    - Do calculation of all distances from each DropOffCenter and store into a state.


  // data fetch for item/depot data comes first, then
  

  useEffect(() => {
    if (userMunicipality === null && initialAppLoad === false) {
      const getAsyncMunicipality = async () => {
        console.log("retrieving asyncStorage - userMunicipality")
        try {
          let value = await AsyncStorage.getItem('userMunicipality');
          console.log(value)
          if (value === null) {
            value = "York Region"
          }
          return setUserMunicipality(value)          
        } catch (error) {
          return new Error("retrieve failed")
        }
      }

      getAsyncMunicipality()
    }
  }, [initialAppLoad])
  
  
  useEffect(() => {
    if (municipalityData === null) {
      const computeDistance = ([prevLat, prevLong], [lat, long]) => {
        const prevLatInRad = toRad(prevLat);
        const prevLongInRad = toRad(prevLong);
        const latInRad = toRad(lat);
        const longInRad = toRad(long);
        
        return (
          // In kilometers
          6377.830272 *
          Math.acos(
            Math.sin(prevLatInRad) * Math.sin(latInRad) +
            Math.cos(prevLatInRad) * Math.cos(latInRad) * Math.cos(longInRad - prevLongInRad),
          )
        );
      }
          
      const toRad = (angle) => {
        return (angle * Math.PI) / 180;
      }
          
      const checkLocationPermission = async () => {
        const { status, permissions: { location: { ios } } } = await Permissions.getAsync(Permissions.LOCATION);
        const temporaryData = tempData
        
        if(status === "granted") {
          await Location.getCurrentPositionAsync({})
          .then((data) => {
            const userLat = data.coords.latitude;
            const userLong = data.coords.longitude;

            for (let each in temporaryData.municipality) {
              temporaryData.municipality[each].depots.forEach((depot) => {
                const depotLat = depot.lat;
                const depotLong = depot.long;
                depot["distance"] = computeDistance([userLat, userLong],[depotLat, depotLong]).toFixed(1)
              })
            }

            setMunicipalityData(temporaryData)
          })
          .catch((error) => console.log(error))
            
          } else if(status !== 'granted') {
            console.log("permission is denied, no distance to calculate")
            setMunicipalityData(temporaryData)
          } else {
            throw new Error("permission denied")
          }

          return setIsAppReady(true)
      }
      
      checkLocationPermission()
    }
  }, [userMunicipality])

  // if permission has been Denied:
  // 2-Denied.
  //    - retrieve municipality info from localStorage
  //    - Firebase call to get Data of selected municipality, and saved to a state.
  
  // Once the below has been all resolved, isAppReady = true / hideSplashScreen.
  //  x FontsLoaded 
  //  x PermissionChecked, and selected municipality has been determined (distance calc if granted)
  //  - Firebase call to get Data (items and locations) and data has been set.
  //  - Get Top Searches
  

  if (!fontLoaded) {
    return <AppLoading />
  }
  else if(initialAppLoad) {
    return <InitialAppLoadScreen setInitialAppLoad={setInitialAppLoad} setUserMunicipality={setUserMunicipality} />
  } 
  else if (!isAppReady) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0945DE", display: "flex", alignItems:"center", justifyContent:"center" }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  } 
  else {
    return (
      <UpdateMunicipalityContext.Provider value={setUserMunicipality}>
        <UserMunicipalityContext.Provider value={userMunicipality}>
          <DataContext.Provider value={municipalityData}>
            <LandingScreen />
          </DataContext.Provider>
        </UserMunicipalityContext.Provider>
      </UpdateMunicipalityContext.Provider>
    );
  }
}