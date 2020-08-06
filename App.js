import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { AsyncStorage, View, ActivityIndicator, AppState } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { useFonts } from '@use-expo/font'
import { AppLoading} from 'expo';
import firebase from './firebase'

import InitialAppLoadScreen from './screens/InitialAppLoadScreen';
import LandingScreen from './screens/LandingScreen';
import tempData from './firebaseTemplate.json'
import { UpdateMunicipalityContext, DataContext, UserMunicipalityContext, TopSearchContext, AppStateVisibleContext } from './context/globalContext';


export default function App() {

  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(null)

  const [isAppReady, setIsAppReady] = useState(false)
  const [initialAppLoad, setInitialAppLoad] = useState(true)
  const [userMunicipality, setUserMunicipality] = useState(null)
  const [topSearch, setTopSearch] = useState()
  const [municipalityData, setMunicipalityData] = useState(null)

  const [fontLoaded] = useFonts({
    "SongMyung": require("./assets/fonts/Song_Myung/SongMyung-Regular.ttf"),
    "WorkSans": require("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf"),
    "WorkSansBold": require("./assets/fonts/Work_Sans/static/WorkSans-SemiBold.ttf"),
  })


  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange)

    return () => {
        AppState.removeEventListener("change", _handleAppStateChange)
    }
  },[])

  const _handleAppStateChange = (nextAppState) => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)
  }
  

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
    const db = firebase.database()
    // the top search functionality should be stored as array index values, and then fetch off of the data set.
    // sort by count and then return top3 only, set as topSearch state.
    
    if (userMunicipality !== null) {
      console.log("useeffect for firebase starts")
      db.ref(`${userMunicipality}`).orderByChild("count").limitToLast(3).on("value", function(response) {
        // console.log(response.val())
        return setTopSearch(response.val())
      }, function(error) {
        console.log(error)
      })
    }

  }, [userMunicipality])


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
    if (municipalityData === null || !municipalityData.municipality[userMunicipality].depots[0].distance) {
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
  }, [userMunicipality, tempData])


  return (
      !fontLoaded
      ?
      <AppLoading />
      :
        initialAppLoad
        ?
        <InitialAppLoadScreen setInitialAppLoad={setInitialAppLoad} setUserMunicipality={setUserMunicipality} />
        :
          !isAppReady
          ?
          <View style={{ flex: 1, backgroundColor: "#0945DE", display: "flex", alignItems:"center", justifyContent:"center" }}>
            <ActivityIndicator size="large" color="white" />
          </View>
          :
          <UpdateMunicipalityContext.Provider value={setUserMunicipality}>
            <UserMunicipalityContext.Provider value={userMunicipality}>
              <DataContext.Provider value={municipalityData}>
                <TopSearchContext.Provider value={topSearch}>
                  <AppStateVisibleContext.Provider value={appStateVisible}>
                    <LandingScreen />
                  </AppStateVisibleContext.Provider>
                </TopSearchContext.Provider>
              </DataContext.Provider>
            </UserMunicipalityContext.Provider>
          </UpdateMunicipalityContext.Provider>
  )
}