import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import TabNavigator from './routes/TabNavigator';
import PermissionModal from './screens/PermissionModal'
import * as Permissions from 'expo-permissions'

export default function App() {

  async function checkPermission () {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <NavigationContainer>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined} 
        style={{flex: 1}}
        >
          <TabNavigator />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}