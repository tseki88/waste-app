import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, FlatList, Dimensions, TextInput, TouchableOpacity, AsyncStorage, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import AppText from '../shared/AppText'
import SearchList from '../shared/SearchList'
import { DataContext, UserMunicipalityContext } from '../context/globalContext'
import LocationSelector from '../shared/LocationSelector'
import firebase from '../firebase'

const SearchScreen = ({ navigation }) => {

    const [query, setQuery] = useState("")
    const [queryDisplay, setQueryDisplay] = useState([])
    const [queryLength, setQueryLength] = useState(0)
    const [matchCount, setMatchCount] = useState(0)
    const [inputOutline, setInputOutline] = useState({ borderColor: "#0000" })

    // Going to need to save different recentSearch based on Municipality set.
    const [recentSearch, setRecentSearch] = useState([])
    
    const [municipalityData, setMunicipalityData] = useState(null)
    
    const data = useContext(DataContext)
    const userMunicipality = useContext(UserMunicipalityContext)

    console.log("screenRerender")

    useEffect(() => {
        setMunicipalityData(data.municipality[userMunicipality])
        setQuery("")
    }, [userMunicipality])

    useEffect(() => {
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

        console.log("setting Data")
        retrieveData()
    }, [])
    
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('recentSearch', JSON.stringify(recentSearch));
        } catch (error) {
            console.log("failed to save in stoeData asyncStorage")
        }
        console.log("setting")
    };

    const inputChangeHandler = (val) => {
        setQuery(val);
        
        let filteredData = municipalityData.items.filter((each) => {
            const stringMatch = each.name.toLowerCase().indexOf(val.toLowerCase()) >= 0 
            return stringMatch
        })
        
        let related = []

        if (filteredData.length === 0) {
            related = municipalityData.items.filter((each) => {
                const relatedMatch = each.search.toLowerCase().indexOf(val.toLowerCase()) >= 0
                return relatedMatch
            })
            related.sort((a,b) => {
                return b.name > a.name ? -1 : 1
            })
            setQueryDisplay(related)
        } else {
            filteredData.sort((a,b) => {
                return b.name > a.name ? -1 : 1
            })
            setQueryDisplay(filteredData)
        }

        setQueryLength(filteredData.length + related.length)
        setMatchCount(filteredData.length)
    }

    const clearSearch = () => {
        setQuery("")
    }

    const pressHandler = (item) => {
        const { name, tag, image, description, category, subCategory, index } = item
        navigation.navigate("ItemDetails", {
            name: name,
            tag: tag,
            image: image,
            description: description,
            category: category,
            subCategory: subCategory
        })

        const itemCount = firebase.database().ref(`${userMunicipality}/` + index)

        const incrementTopSearch = () => {
            console.log(index)
            itemCount.once("value", function(response) {
                
                if (response.val() === null){
                    console.log("count is now 1")
                    itemCount.set({"count": 1})
                } else {
                    console.log("count has been increased by 1")
                    let currentCount = response.val().count + 1
                    itemCount.set({"count": currentCount})
                }
                
            }, function(error){console.log(error)})
        }

        incrementTopSearch()

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
                    tempState.unshift({...item, muniRef: userMunicipality})
                    return tempState
                })
            } else {
                setRecentSearch(prev => {
                    let tempState = prev
                    tempState.unshift({...item, muniRef: userMunicipality})
                    return tempState
                })
            }

            storeData()
        }

    }



    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.wrapper, {paddingRight: 0}]}>
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
                                onBlur={() => setInputOutline({ borderColor: "#0000" })}
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
                    <LocationSelector />
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
                                        style={{paddingRight: 18}}
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
                            {
                                recentSearch.length !== 0
                                ?
                                <FlatList
                                    style={{paddingRight: 18}}
                                    data={recentSearch}
                                    keyExtractor={item => item.name}
                                    renderItem={({ item }) => {
                                        return (
                                            <ListItem item={item} query={query} history={true} pressHandler={pressHandler} />
                                        )
                                    }}
                                />
                                :
                                <View style={{ marginVertical: 8 }}>
                                    <AppText>No recent search results found.</AppText>
                                </View>
                            }
                        </Section>
                }
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width + 2,
        marginLeft: -19,
        marginTop: -2,
        paddingHorizontal: 19,
        paddingTop: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#0000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 1,
                borderColor: "#0000",
            },
        })
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
        marginTop: 20,
        marginBottom: 10,
        ...Platform.select({
            ios: {
                borderColor: '#E6EBEF',
            },
            android: {
                backgroundColor: "#fff",
                elevation: 0.6,
                borderColor: "#0000",
            },
        })
    },
    input: {
        flex: 1,
        height: 42,
        marginLeft: 12,
    },
    clearInputButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 36,
        height: 42,
    },
    cancelButton: {
        height: 42,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 16,
        paddingVertical: 9,
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
