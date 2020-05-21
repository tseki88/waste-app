import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage, View, Image } from 'react-native';
import TabNavigator from '../routes/TabNavigator';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { AppLoading, SplashScreen } from 'expo';

const LandingScreen = () => {

    // useEffect(() => {
    //     const getUserMunicipality = async () => {
    //         console.log("fetching userMunicipality from asyncStorage")
    //         try {
    //             const value = await AsyncStorage.getItem('userMunicipality')
    //             return setUserMunicipality(value)
    //         } catch (error) {
    //             return new Error("retrieve failed")
    //         }
    //     }
    //     getUserMunicipality()
    // }, [])


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
    )
}

export default LandingScreen