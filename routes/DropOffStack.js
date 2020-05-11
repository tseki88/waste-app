import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';
import DropOffScreen from '../screens/DropOffScreen';

const DropOffStack = createStackNavigator();

const DropOffStackScreen = () => {
    return (
        <DropOffStack.Navigator 
            initialRouteName='DropOffScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                },
                title: "DropOff"
            }}
        >
            <DropOffStack.Screen 
                name="DropOffScreen"
                component={DropOffScreen}
            />
            <DropOffStack.Screen
                name="LocationDetails"
                component={LocationDetails}
            />
        </DropOffStack.Navigator>
    )
}

export default DropOffStackScreen;