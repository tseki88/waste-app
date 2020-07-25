import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import TabNavigator from '../routes/TabNavigator';

const LandingScreen = () => {

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