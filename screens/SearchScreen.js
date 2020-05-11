import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import AppText from '../shared/AppText'
import bindicator from '../bindicator.json'
import SearchList from '../shared/SearchList'

const SearchScreen = ({ navigation, route }) => {

    // Temporary Data, will be based off global data later on
    const [nearest, setNearest] = useState([
        { location: "City of Toronto", key: "1" },
        { location: "York Region", key: "2" },
    ])

    const [query, setQuery] = useState("")
    const [queryDisplay, setQueryDisplay] = useState([])
    const [queryLength, setQueryLength] = useState(0)
    const [matchCount, setMatchCount] = useState(0)
    const [inputOutline, setInputOutline] = useState({ borderColor: "grey" })

    // Turn this into global/persistent state, on localStorage
    const [recentSearch, setRecentSearch] = useState([])
    
    
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('recentSearch', JSON.stringify(recentSearch));
        } catch (error) {
            console.log("failed to save in stoeData asyncStorage")
        }
        console.log("setting")
    };
    
    const retrieveData = async () => {
        console.log("retrieving")
        try {
            const value = await AsyncStorage.getItem('recentSearch');
            if (value !== null) {
                setRecentSearch(JSON.parse(value))
            }
        } catch (error) {
            return
        }
    };

    useEffect(() => {
        retrieveData()
    }, [])

    const inputChangeHandler = (val) => {
        setQuery(val);

        
        let filteredData = bindicator.filter((each) => {
            const stringMatch = each.name.toLowerCase().indexOf(val.toLowerCase()) >= 0 
            return stringMatch
        })
        
        let related = []

        if (filteredData.length === 0) {
            related = bindicator.filter((each) => {
                const relatedMatch = each.search.toLowerCase().indexOf(val.toLowerCase()) >= 0
                return relatedMatch
            })
            setQueryDisplay(related)
        } else {
            setQueryDisplay(filteredData)
        }

        setQueryLength(filteredData.length + related.length)
        setMatchCount(filteredData.length)
    }

    const clearSearch = () => {
        setQuery("")
    }

    const pressHandler = (item) => {
        const { name, tag, image, description } = item
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

        if (duplicate === false) {
            if (recentSearch.length > 2) {
                setRecentSearch(prev => {
                    let tempState = prev
                    tempState.pop()
                    tempState.unshift(item)
                    return tempState
                })
            } else {
                setRecentSearch(prev => {
                    let tempState = prev
                    tempState.unshift(item)
                    return tempState
                })
            }

            storeData()
        }

    }



    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.inputContainer}>
                        <View style={[styles.inputWrapper, inputOutline]}>
                            <TextInput
                                placeholder="Search for an item"
                                placeholderTextColor="grey"
                                autoCapitalize='none'
                                onChange={val => inputChangeHandler(val.nativeEvent.text)}
                                value={query}
                                autoFocus={true}
                                onFocus={() => setInputOutline({ borderColor: "#0945DE" })}
                                onBlur={() => setInputOutline({ borderColor: "grey" })}
                                style={[styles.input, globalStyles.fontBase]}
                            />
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
                            <AppText style={[globalStyles.fontBlue, { textAlign: "center" }]}>Cancel</AppText>
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
                        <Section title={`Results (${queryLength})`} list={true}>
                            {
                                queryDisplay.length === 0
                                    ?
                                    <View style={{ marginVertical: 8 }}>
                                        <AppText>Sorry, we couldn’t find any results. Double check the spelling and try again.</AppText>
                                    </View>
                                    :
                                    <FlatList
                                        data={queryDisplay}
                                        keyExtractor={item => item.name + item.category + item.subCategory}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <SearchList item={item} query={query} pressHandler={pressHandler} matchCount={matchCount} index={index} />
                                            )
                                        }}
                                    />
                            }
                        </Section>
                        :
                        <Section title="Recent Searches" list={true}>
                            <FlatList
                                data={recentSearch}
                                keyExtractor={item => item.name}
                                renderItem={({ item }) => {
                                    return (
                                        <ListItem item={item} query={query} history={true} pressHandler={pressHandler} />
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
        marginLeft: -18,
        paddingHorizontal: 18,
        elevation: 1,
        paddingTop: 10,
        // paddingBottom: 10,
        // width:Dimensions.get('screen').width - 40,
        // elevation: 1,
        // paddingTop: 20,
        // marginBottom: 10,
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: 'grey',
        // shadowOpacity: 1,
        // backgroundColor: "#0000"
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
        borderWidth: 1,
        // borderColor: 'grey',
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
        alignItems: "center",
        width: 36,
        height: 42,
        // borderColor:"grey", 
        // borderWidth:1, 
    },
    cancelButton: {
        height: 42,
        marginTop: 20,
        marginBottom: 10,
        // paddingRight: 0,
        // paddingHorizontal: 16,
        marginLeft: 16,
        paddingVertical: 9,
        // justifyContent:"center",
        // alignItems: "center",
        // marginRight: 14,
        // borderWidth:1
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
