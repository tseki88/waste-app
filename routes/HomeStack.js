import React, { useState, createContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';
import SearchScreen from '../screens/SearchScreen';
import MainScreen from '../screens/MainScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {

    const [nearest, setNearest] = useState([
        {location:"Markham", key : "1"},
        {location:"Mississauga", key : "2"},
        {location:"Richmond Hill", key : "3"},
        {location:"Vaughan", key : "4"},
        {location:"North York", key : "5"},
    ])

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