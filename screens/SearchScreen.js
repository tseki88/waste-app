import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import data from '../sampleData'
import AppText from '../shared/AppText'
import bindicator from '../bindicator.json'
import { SharedElement, SharedElementTransition, nodeFromRef } from 'react-native-shared-element';  

const SearchScreen = ({navigation, route}) => {

    // const data = JSON.parse(bindicator)
    // console.log(bindicator)

    // Temporary Data, will be based off global data later on
    const [nearest, setNearest] = useState([
        {location:"Aurora", key : "1"},
        {location:"East Gwillimbury", key : "2"},
        {location:"Georgina", key : "3"},
        {location:"King", key : "4"},
        {location:"Markham", key : "5"},
        {location:"Newmarket", key : "6"},
        {location:"Richmond Hill", key : "7"},
        {location:"Vaughan", key : "8"},
        {location:"Whitchurch-Stouffville", key : "9"},
    ])

    const [query, setQuery] = useState("")
    const [queryDisplay, setQueryDisplay] = useState([])

    // Turn this into global/persistent state, on localStorage
    const [recentSearch, setRecentSearch] = useState([])
    
    const inputChangeHandler = (val) => {
        setQuery(val);
        
        let filteredData = bindicator.filter((each) => {
            return each.name.toLowerCase().indexOf(val.toLowerCase()) >= 0
        })
        
        setQueryDisplay(filteredData)
    }

    const clearSearch = () => {
        setQuery("")
    }

    const pressHandler = (item) => {
        const {name, tag, image, description} = item
        navigation.navigate("ItemDetails", {
            name: name,
            tag: tag,
            image: image,
            description: description
        })

        let duplicate = false

        recentSearch.forEach((e) => {
            if (e.name === item.name) {
                return duplicate = true
            }
        })

        if (duplicate === false){
            if (recentSearch.length > 2) {
                setRecentSearch(prev => {
                    let tempState = prev
                    tempState.pop()
                    tempState.unshift(item)
                    console.log(tempState)
                    return tempState
                })
            } else {
                setRecentSearch(prev => {
                    let tempState = prev
                    tempState.unshift(item)
                    return tempState
                })
            }
        }
    }

    let endAncestor;
    let endNode;
    

    return (
        <View style={globalStyles.container} ref={ref => endAncestor = nodeFromRef(ref)}>
            <View style={globalStyles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.inputContainer}>
  
                        <View style={styles.inputWrapper}>
                    <SharedElement onNode={node => endNode = node} id="input">
                            <TextInput
                                placeholder="Search for an item" 
                                placeholderTextColor="grey"
                                autoCapitalize='none'
                                onChange={val => inputChangeHandler(val.nativeEvent.text)} 
                                value={query} 
                                autoFocus={true}
                                style={[styles.input, globalStyles.fontBase]} 
                            />
                        </SharedElement>
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
                {
                    query !== ""
                    ?
                    <Section title={`Results (${queryDisplay.length})`} list={true}>
                        <FlatList
                            data={queryDisplay}
                            renderItem={({item}) => {                            
                                return (
                                    <ListItem item={item} query={query} pressHandler={pressHandler}/>
                                )
                            }}
                        />
                    </Section>
                    :
                    <Section title="Recent Searches" list={true}>
                        <FlatList
                            data={recentSearch}
                            renderItem={({item}) => {                            
                                return (
                                    <ListItem item={item} query={query} history={true} pressHandler={pressHandler}/>
                                )
                            }}
                        />
                    </Section>
                }
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        marginLeft: -14,
        paddingHorizontal: 14,
        elevation: 1,
        paddingTop: 10,
        // paddingBottom: 10,
        // width:Dimensions.get('screen').width - 40,
        // elevation: 1,
        // paddingTop: 20,
        // marginBottom: 10
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
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 42,
        marginLeft: 12,
        // borderColor:"grey", 
        // borderWidth:1, 
    },
    clearInputButton: {
        justifyContent: "center",
        alignItems:"center",
        width: 36,
        height: 42,
        // borderColor:"grey", 
        // borderWidth:1, 
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
