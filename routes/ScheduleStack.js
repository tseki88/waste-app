import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';
import ScheduleScreen from '../screens/ScheduleScreen';

const ScheduleStack = createStackNavigator();


// Now a stretch goal, not used for MVP
const ScheduleStackScreen = () => {
    return (
        <ScheduleStack.Navigator 
            initialRouteName='ScheduleScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                },
                title: "Schedule"
            }}
        >
            <ScheduleStack.Screen 
                name="ScheduleScreen"
                component={ScheduleScreen}
            />
        </ScheduleStack.Navigator>
    )
}

export default ScheduleStackScreen;