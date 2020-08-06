import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LocationDetails from '../screens/LocationDetails';
import DropOffScreen from '../screens/DropOffScreen';
import LocationSelector from '../shared/LocationSelector';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

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
                headerTitle: ""
            }}
        >
            <DropOffStack.Screen 
                name="DropOffScreen"
                component={DropOffScreen}
                options={{
                    headerTitle: () => (
                        <View style={{borderWidth:0}}>
                            <Text style={[globalStyles.headerTwo, {marginTop: 30}]}>Drop-Off Centers</Text>
                            <LocationSelector />
                        </View>
                        
                        ),
                    headerStyle: {
                        height: 120
                    }
                }}
            />
            <DropOffStack.Screen
                name="LocationDetails"
                component={LocationDetails}
                options={{
                    headerBackTitleVisible: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontSize: 16,
                        marginLeft: 4
                    }
                }}
            />
        </DropOffStack.Navigator>
    )
}

export default DropOffStackScreen;