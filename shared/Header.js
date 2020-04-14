import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, Animated, TouchableWithoutFeedback } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'

const Header = ({title, navigation}) => {

    // const dispatch = useDispatch()

    const [nearest, setNearest] = useState([
        {location:"Markham", key : "1"},
        {location:"Mississauga", key : "2"},
        {location:"Richmond Hill", key : "3"},
        {location:"Vaughan", key : "4"},
        {location:"North York", key : "5"},
    ])

    const data = [
        "styrofoam",
        "styrofoam board",
        "styrofoam plate",
        "styrofoam cup",
        "string"
    ]

    const [query, setQuery] = useState("")
    const [queryDisplay, setQueryDisplay] = useState([])
    
    const inputChangeHandler = (val) => {
        setQuery(val);
        
        let filteredData = data.filter((each) => {
            return each.toLowerCase().indexOf(val.toLowerCase()) == 0
        })
        
        setQueryDisplay(filteredData)
    }

    const clearSearch = () => {
        setQuery("")
    }
    
    const navigateSearch = () => {
        navigation.navigate("Home", {screen: "Search"})
    }

    return (
        <View style={styles.header}>
            <Text style={globalStyles.headerOne}>{title}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                {/* <TouchableWithoutFeedback onPress={navigateSearch} style={{height: 42, padding: 20}} > */}
                        <TextInput
                            placeholder="Search for an item" 
                            placeholderTextColor="grey"
                            onChange={val => inputChangeHandler(val.nativeEvent.text)} 
                            value={query} 
                            style={styles.input} 
                            onFocus={navigateSearch}
                        />

                {/* </TouchableWithoutFeedback> */}
                    {/* <TouchableOpacity onPress={navigateSearch} style={{height: 42, padding: 20}} > */}
                    {/* </TouchableOpacity> */}
                    {
                    query === "" 
                        ?
                    null
                        :
                    <TouchableOpacity style={styles.clearInputButton} onPress={clearSearch} >
                        <AntDesign name="close" size={18} color="#0945DE" />
                    </TouchableOpacity>
                    }
                </View>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.popToTop()} >
                    <AppText style={globalStyles.fontBlue}>Cancel</AppText>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.sideScroll} showsHorizontalScrollIndicator={false}>
                {/* Maybe Radio? or just a setState a single location which gets a focus style */}
                <AppText style={styles.location}>Location:</AppText>
                {nearest.map((item) => {
                    return (
                        <View key={item.key} style={styles.each}>
                            <AppText>{item.location}</AppText>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}


export default Header

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width - 40,
        elevation: 1,
        paddingTop: 5,
    },
    inputContainer: {
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    inputWrapper: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        height: 42,
        borderRadius: 4,
        borderWidth: 0.2,
        borderColor: 'grey',
        // paddingLeft: 15,
        // paddingRight: 8,
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderColor:"grey", 
        borderWidth:1, 
        flex: 1,
        height: 42,
        marginLeft: 12,
    },
    clearInputButton: {
        justifyContent: "center",
        alignItems:"center",
        width: 36,
        height: 42,
        // marginLeft: 5,
        // paddingHorizontal: 8,
        borderColor:"grey", 
        borderWidth:1, 
    },
    cancelButton: {
        height: 42,
        marginTop: 20,
        marginBottom: 10,
        paddingRight: 0,
        paddingLeft: 16,
        paddingVertical: 9,
        alignItems: "center",
    }
    ,
    sideScroll: {
        paddingBottom: 8,
        marginVertical: 2,
        overflow: "visible"
    },
    location: {
        marginRight: 8,
        paddingVertical: 4
    },
    each: {
        marginRight: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: "#E6EBEF",
        borderWidth: 1,
    },
})
