import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { AsyncStorage, View, ActivityIndicator } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { useFonts } from '@use-expo/font'
import { AppLoading, SplashScreen } from 'expo';
import InitialAppLoadScreen from './screens/InitialAppLoadScreen';
import LandingScreen from './screens/LandingScreen';
import tempData from './firebaseTemplate.json'
import { UpdateMunicipalityContext, DataContext, UserMunicipalityContext, depotDistanceContext } from './context/globalContext';


export default function App() {

  // StatesRequired:
  //  - isSplashReady
  //  - isAppReady
  //  - userMunicipality (locationPermissionGranted ? calc from userLocation : fetch from localStorage)
  //  - itemData
  //  - depotData
  //    - calculatedDistances (!locationPermissionGranted = null)
  //  - topSearch results (for main screen only)

  // const [isSplashReady, setIsSplashReady] = useState(false)
  
  const [isAppReady, setIsAppReady] = useState(false)
  const [initialAppLoad, setInitialAppLoad] = useState(true)
  const [userMunicipality, setUserMunicipality] = useState(null)
  // const [itemData, setItemData] = useState(null)
  // const [depotData, setDepotData] = useState(null)
  // const [topSearch, setTopSearch] = useState([])
  const [municipalityData, setMunicipalityData] = useState({})
  const [depotDistance, setDepotDistance] = useState(null)

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

  // if permission has been Provided (userLocation state will be used to determine for conditional rendering e.g. userLocation===null means distance is hidden)
  // 2-Granted. Get userLocation lat + long (no need to save this to localStorage)
  //    - determine municipality
  //      - save this to a state
  //    - Firebase call to get Data of selected municipality, and saved to a state
  //    - Do calculation of all distances from each DropOffCenter and store into a state.


  // data fetch for item/depot data comes first, then
  

  useEffect(() => {
    if (userMunicipality === null) {
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

    if (initialAppLoad === false) {
      // This is where the firebase call will happen
      setMunicipalityData(tempData.municipality[userMunicipality])
    }
  }, [userMunicipality])
  
  
  // Change this so that it only calculates it on initial app load, and save it. (no need to recalculate all the distances every time you switch municipality)
  useEffect(() => {
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
      
      if(status === "granted") {
        await Location.getCurrentPositionAsync({})
        .then((data) => {
          const userLat = data.coords.latitude;
            const userLong = data.coords.longitude;

            const distanceArray = municipalityData.depots.map((depot) => {
              const depotLat = depot.lat;
              const depotLong = depot.long;
              const depotObject = {
                key: depot.key,
                depotDistance: computeDistance([userLat, userLong],[depotLat, depotLong]).toFixed(1)
              } 
              return depotObject
            })
            console.log(distanceArray)
            return setDepotDistance(distanceArray)
          }).catch((error) => console.log(error))
          
          
          // get user geolocation & calculate distances, save to state
          // Map through depot's geolocation and return an array of objects{depotId: number, distance: string?}
          // setDepotDistance({})
          // return setDepotDistance({})
        } else if(status !== 'granted') {
          // Goes to city selection screen
          console.log("permission is denied, no distance to calculate")
          // return setIsAppReady(true)
        } else {
          throw new Error("permission denied")
        }

        return setIsAppReady(true)
    }
    if (municipalityData.depots !== undefined){
      checkLocationPermission()
    }
  }, [municipalityData])

  // if permission has been Denied:
  // 2-Denied.
  //    - retrieve municipality info from localStorage
  //    - Firebase call to get Data of selected municipality, and saved to a state.
  
  // Once the below has been all resolved, isAppReady = true / hideSplashScreen.
  //  x FontsLoaded 
  //  x PermissionChecked, and selected municipality has been determined (distance calc if granted)
  //  - Firebase call to get Data (items and locations) and data has been set.
  //  - Get Top Searches
  
  
  


  // const cacheResourcesAsync = async () => {
  //   const images = [require('./assets/splash.png')];
  //   const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
  //   return Promise.all(cacheImages);
  // }

  // useEffect(() => {
  //   // SplashScreen.preventAutoHide();
  //   // checkPermission()
  //   cacheResourcesAsync() // ask for resources
  //   .then(() => setIsSplashReady(true)) // mark resources as loaded
  //   .catch(error => console.error(`Unexpected error thrown when loading:
  //   ${error.stack}`));
  //   // retrieveData()
  // }, [])
  

  if (!fontLoaded) {
    return <AppLoading />
  }
  else if(initialAppLoad) {
    return <InitialAppLoadScreen setInitialAppLoad={setInitialAppLoad} />
  // }
  // else if (!isSplashReady) {
  //   return null
  } else if (!isAppReady) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0945DE", display: "flex", alignItems:"center", justifyContent:"center" }}>
        <ActivityIndicator size="large" color="white" />
          {/* <AppText style={{color: "white", marginTop: 30}}>Loading...</AppText> */}
          {/* <Image
            style={{ flex: 1, resizeMode:"contain", width: undefined, height: undefined }}
            source={require('./assets/splash.png')}
            onLoadEnd={() => {
              // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
              console.log('Image#onLoadEnd: hiding SplashScreen');
              SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
              setIsAppReady(true)
            }}
            fadeDuration={300} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300`
          /> */}
      </View>
    );
  } else {
    return (
      <UpdateMunicipalityContext.Provider value={setUserMunicipality}>
        <UserMunicipalityContext.Provider value={userMunicipality}>
          <DataContext.Provider value={municipalityData}>
            <depotDistanceContext.Provider value={depotDistance}>
              <LandingScreen />
            </depotDistanceContext.Provider>
          </DataContext.Provider>
        </UserMunicipalityContext.Provider>
      </UpdateMunicipalityContext.Provider>
    );
  }
}