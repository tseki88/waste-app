import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import TabNavigator from './routes/TabNavigator';
import PermissionModal from './screens/PermissionModal'
import * as Permissions from 'expo-permissions'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo';


export default function App() {

  async function checkPermission () {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  }



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