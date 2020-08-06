import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator 
            initialRouteName='SettingScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                },
                title: "Setting"
            }}
        >
            <SettingStack.Screen 
                name="SettingScreen"
                component={SettingScreen}
            />
        </SettingStack.Navigator>
    )
}

export default SettingStackScreen;