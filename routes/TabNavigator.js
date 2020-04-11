import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons'
import HomeStackScreen from './HomeStack';
import SettingStackScreen from './SettingStack';
import { View, TouchableOpacity, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// const CustomTab = () => {
//     <TouchableOpacity style={styles.section}>
//         <View style={styles.innerSection}>
//             {/* <AntDesign name="calendar" size={22} /> */}
//             {/* <Text style={styles.label}>Schedule</Text> */}
//         </View>
//     </TouchableOpacity>
// }

// function MyTabBar({ state, descriptors, navigation }) {
//     return (
//     <View style={{ flexDirection: 'row' }}>
//         {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//             options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//             const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//             }
//         };

//         const onLongPress = () => {
//             navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//             });
//         };

//         return (
//             <TouchableOpacity
//                 accessibilityRole="button"
//                 accessibilityStates={isFocused ? ['selected'] : []}
//                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                 testID={options.tabBarTestID}
//                 onPress={onPress}
//                 onLongPress={onLongPress}
//                 style={{ flex: 1, height: 50,   }}
//             >
//                 <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                     {label}
//                 </Text>
//             </TouchableOpacity>
//         );
//         })}
//     </View>
//     );
// }



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

                    return <AntDesign name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: "blue",
                inactiveTintColor: "grey"
            }}
        >
            <Tab.Screen name="Search" component={HomeStackScreen} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
            {/* <Tab.Screen name="Schedule" />
            <Tab.Screen name="Settings" /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator