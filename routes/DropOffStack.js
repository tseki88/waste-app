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
                title: "Back",
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: -25,
                }
            }}
        >
            <DropOffStack.Screen 
                name="DropOffScreen"
                component={DropOffScreen}
                options={{
                    title: "Drop Off Centers",
                    headerTitleStyle: {
                        marginLeft: 0
                    }
                }}
            />
            <DropOffStack.Screen
                name="LocationDetails"
                component={LocationDetails}
            />
        </DropOffStack.Navigator>
    )
}

export default DropOffStackScreen;