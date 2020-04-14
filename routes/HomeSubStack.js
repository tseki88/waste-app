import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen'
import SearchScreen from '../screens/SearchScreen'

const HomeSubStack = ({navigation}) => {

    // For Description, discuss whether to make it an array per paragraph, or add a "\n" and split it into an array later.

    const HomeSubStack = createStackNavigator();

    return (
        <HomeSubStack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeSubStack.Screen 
                name="Main"
                component={MainScreen}
            />
            <HomeSubStack.Screen
                name="Search"
                component={SearchScreen}
            />

        </HomeSubStack.Navigator>
        
    )
}

export default HomeSubStack
