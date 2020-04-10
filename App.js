import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import {AppLoading} from 'expo';
import Locate from './screens/Locate';
import Footer from './shared/Footer';
// import Home from './screens/Home';
import HomeStack from './routes/HomeStack';

export default function App() {

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : undefined} 
    style={{flex: 1}}
    // keyboardVerticalOffset={-60}
    >
      <HomeStack />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  }
})