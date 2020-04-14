import React, { useState, createContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeSubStack from '../routes/HomeSubStack';
import Header from '../shared/Header';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LocationDetails from '../screens/LocationDetails';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {


    // const data = [
    //     "styrofoam",
    //     "styrofoam board",
    //     "styrofoam plate",
    //     "styrofoam cup",
    //     "string"
    // ]

    // const [query, setQuery] = useState("")
    // const [queryDisplay, setQueryDisplay] = useState([])
    
    // const inputChangeHandler = (val) => {
    //     setQuery(val);
        
    //     let filteredData = data.filter((each) => {
    //         return each.toLowerCase().indexOf(val.toLowerCase()) == 0
    //     })

    //     setQueryDisplay(filteredData)
    // }

    function getHeaderHeight(route) {
        // Access the tab navigator's state using `route.state`
        const routeName = route.state
          ? // Get the currently active route name in the tab navigator
            route.state.routes[route.state.index].name
          : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
            // In our case, it's "Feed" as that's the first screen inside the navigator
            route.params?.screen || 'Feed';
    
        switch (routeName) {
            case "Home":
                return 200;
            case 'Main':
                return 200;
            case 'Search':
                return 150;
            default:
                return 60;
        }
    }

    function getHeaderTitle(route) {
        // Access the tab navigator's state using `route.state`
        const routeName = route.state
          ? // Get the currently active route name in the tab navigator
            route.state.routes[route.state.index].name
          : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
            // In our case, it's "Feed" as that's the first screen inside the navigator
            route.params?.screen || 'Feed';
    
        switch (routeName) {
            case 'Home':
                return "What do you want to throw out?";
            case 'Main':
                return "What do you want to throw out?";
            case 'Search':
                return null;
        }
    }



    return (
        // <SearchContext.Provider queryDisplay={queryDisplay}>
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
                component={HomeSubStack}
                options={({navigation, route}) => {
                    return {
                        headerTitle: () => <Header title={getHeaderTitle(route)} route={route} navigation={navigation} />,
                        headerStyle: {
                            height: getHeaderHeight(route)
                        }
                    }
                }}
            />
            <HomeStack.Screen 
                name="ItemDetails"
                component={ItemDetailScreen}
            />
            <HomeStack.Screen
                name="LocationDetails"
                component={LocationDetails}
            />
        </HomeStack.Navigator>
        // </SearchContext.Provider>
    )
}

export default HomeStackScreen;