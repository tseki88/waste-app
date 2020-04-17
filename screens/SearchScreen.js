import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import data from '../sampleData'
import AppText from '../shared/AppText'

const SearchScreen = ({navigation, route}) => {

    // Temporary Data, will be based off global data later on
    const [nearest, setNearest] = useState([
        {location:"Markham", key : "1"},
        {location:"Mississauga", key : "2"},
        {location:"Richmond Hill", key : "3"},
        {location:"Vaughan", key : "4"},
        {location:"North York", key : "5"},
    ])

    const [query, setQuery] = useState("")
    const [queryDisplay, setQueryDisplay] = useState([])
    
    const inputChangeHandler = (val) => {
        setQuery(val);
        
        let filteredData = data.filter((each) => {
            return each.name.toLowerCase().indexOf(val.toLowerCase()) === 0
        })
        
        setQueryDisplay(filteredData)
    }

    const clearSearch = () => {
        setQuery("")
    }

    const pressHandler = ({name, tags, image, description}) => {
        navigation.navigate("ItemDetails", {
            name: name,
            tags: tags,
            image: image,
            description: description
        })
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Search for an item" 
                                placeholderTextColor="grey"
                                onChange={val => inputChangeHandler(val.nativeEvent.text)} 
                                value={query} 
                                autoFocus={true}
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
                    <Section title={null} list={true}>
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
