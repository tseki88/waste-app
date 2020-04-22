import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';
import SearchScreen from '../screens/SearchScreen';
import MainScreen from '../screens/MainScreen';
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";


const HomeStack = createStackNavigator();
// const HomeStack = createSharedElementStackNavigator();

const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator 
            initialRouteName='Main'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                },
                title: "Back",
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: -25,
                }
            }}
        >
            <HomeStack.Screen 
                name='Main' 
                component={MainScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen 
                name="ItemDetails"
                component={ItemDetailScreen}
            />
            <HomeStack.Screen
                name="LocationDetails"
                component={LocationDetails}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;