import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../shared/Header';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator 
            initialRouteName='Home'
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
                name='Home' 
                component={HomeScreen}
                options={({navigation}) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title="What do you want to throw out?" />,
                        headerStyle: {
                            height: 220
                        }
                    }
                }}
            />
            {/* <HomeStack.Screen
                name="Search"
                component={SearchItem}
            /> */}
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