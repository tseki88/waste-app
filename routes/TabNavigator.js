import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'
import HomeStackScreen from './HomeStack';
import SettingStackScreen from './SettingStack';
import { View, TouchableOpacity, Text } from 'react-native';
import DropOffStackScreen from './DropOffStack';
import ScheduleStackScreen from './ScheduleStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            // tabBar={props => <MyTabBar {...props} />}
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;

                    if (route.name === "Search") {
                        iconName = "search1"
                    }
                    else if (route.name === "Setting") {
                        iconName = "setting"
                    }
                    else if (route.name === "Schedule") {
                        iconName = "calendar"
                    }
                    else if (route.name === "DropOff") {
                        iconName = "inbox"
                    }

                    return <AntDesign name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: "blue",
                inactiveTintColor: "grey"
            }}
        >
            <Tab.Screen name="Search" component={HomeStackScreen} />
            <Tab.Screen name="DropOff" component={DropOffStackScreen} />
            <Tab.Screen name="Schedule" component={ScheduleStackScreen} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator