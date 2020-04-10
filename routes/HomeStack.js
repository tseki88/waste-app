import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Locate from '../screens/Locate';
import Header from '../shared/Header';
import ItemDetails from '../screens/ItemDetails';
// import SearchItem from '../screen/SearchItem';
import LocationDetails from '../screens/LocationDetails';

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
                            backgroundColor: '#fff',
                            height: 60,
                        }
                    }}
                >
                    <Stack.Screen 
                        name='Home' 
                        component={Home}
                        options={({navigation}) => {
                            return {
                                headerTitle: () => <Header navigation={navigation} title="What do you want to throw out?" />,
                                headerStyle: {
                                    height: 180
                                }
                            }
                        }}
                    />
                    {/* <Stack.Screen
                        name="Search"
                        component={SearchItem}
                    /> */}
                    <Stack.Screen
                        name="Locate"
                        component={Locate}
                    />
                    <Stack.Screen 
                        name="ItemDetails"
                        component={ItemDetails}
                    />
                    <Stack.Screen
                        name="LocationDetails"
                        component={LocationDetails}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TouchableWithoutFeedback>
    )
}

export default HomeStack;