import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Locate from '../screens/Locate';
import Header from '../shared/Header';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName='Home'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'aliceblue',
                            height: 180,
                        },
                        
                    }}
                >
                    <Stack.Screen 
                        name='Home' 
                        component={Home}
                        options={({navigation}) => {
                            return {
                                headerTitle: () => <Header navigation={navigation} title="What do you want to throw out?" />
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Locate"
                        component={Locate}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TouchableWithoutFeedback>
    )
}

export default HomeStack;