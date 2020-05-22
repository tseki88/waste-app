import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';
import SearchScreen from '../screens/SearchScreen';
import MainScreen from '../screens/MainScreen';
import globalStyles from '../styles/globalStyles';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import AppText from '../shared/AppText';
import MainHeader from '../shared/MainHeader';

const HomeStack = createStackNavigator();

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
                options={({navigation}) => ({
                    headerTitle: () => <MainHeader navigation={navigation} />,
                    headerStyle: {
                        height: 200
                    }
                })}
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