import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons'
import HomeStackScreen from './HomeStack';
import SettingStackScreen from './SettingStack';
import DropOffStackScreen from './DropOffStack';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const renderNav = (focused, iconType) => (
        <View style={{flex: 1, alignItems: 'center', borderTopColor: focused ? "blue" : '#E6EBEF', paddingTop: 4, borderTopWidth: 2, width: "100%", justifyContent:"center"}}>
            {iconType()}
        </View>
    )


    return (
        <Tab.Navigator
            initialRouteName="Search"
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconType

                    if (route.name === "Search") {
                        iconType = () => <AntDesign name="search1" size={size} color={color} />
                        return renderNav(focused, iconType)
                    }
                    else if (route.name === "Setting") {
                        iconType = () => <AntDesign name="setting" size={size} color={color} />
                        return renderNav(focused, iconType)
                    }
                    else if (route.name === "DropOff") {
                        iconType = () => <Feather name="package" size={size} color={color} />
                        return renderNav(focused, iconType)
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: "blue",
                inactiveTintColor: "grey",
                style: {paddingBottom: 4, height: 60}
            }}
        >
            <Tab.Screen name="Search" component={HomeStackScreen} />
            <Tab.Screen name="DropOff" options={{tabBarLabel: "Drop-Off"}} component={DropOffStackScreen} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator