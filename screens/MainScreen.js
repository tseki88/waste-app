import React, { useState } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Dimensions, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from '../shared/AppText'
import Card from '../shared/Card'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import ListItem from '../shared/ListItem'

const MainScreen = ({navigation}) => {

    const [topSearch, setTopSearch] = useState([
        {
            key: '1',
            name: "styrofoam packaging",
            tags: ["drop off", "garbage"],
            image: null,
            description: [
                "Drop off at a Community Environmental Center (CEC) or Georgina Transfer Station for recycling. Otherwise, this item should be placed in your garbage.",
                "Material must be free of debris, including cardboard and paper.",
                "Styrofoam containers such as meat trays, cups, plates and packaging peanuts (including biodegradable peanuts) are not accepted and should be placed in your garbage"
            ]
        },
        {
            key: '2',
            name: "cardboard",
            tags: ["drop off", "recycling", "compost"],
            image: null,
            description: [
                "Cardboard Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
                "Material must be free of debris, including cardboard and paper.",
                "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
            ]
        },
        {
            key: '3',
            name: "coffee cup",
            tags: ["garbage"],
            image: null,
            description: [
                "Coffee Cup Filler Text: -- for recycling. Otherwise, this item should be placed in your garbage.",
                "Material must be free of debris, including cardboard and paper.",
                "Take out containers such as pizza boxes are not accepted as recycling and should be placed in your compost"
            ]
        },
    ])

    const [nearest, setNearest] = useState([
        {location:"Markham", key : "1"},
        {location:"Mississauga", key : "2"},
        {location:"Richmond Hill", key : "3"},
        {location:"Vaughan", key : "4"},
        {location:"North York", key : "5"},
    ])

    // get the name/id only for top items, then render based on imported master data

    const pressHandler = ({name, tags, image, description}) => {
        navigation.navigate("ItemDetails", {
            name: name,
            tags: tags,
            image: image,
            description: description
        })
    }

    const navigateSearch = () => {
        navigation.navigate("Search")
    }
    // Pressing Search Button => navigate to search

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <View style={styles.header}>
                    <Text style={globalStyles.headerOne}>What do you want to throw out?</Text>
                    <TouchableWithoutFeedback onPress={navigateSearch} style={{height: 42}}>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputWrapper}>
                                <AppText style={styles.input}>Search for an item</AppText>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
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
                <Section title="Top Searches" flex={4} list={true}>
                    <FlatList
                        data={topSearch}
                        renderItem={({item}) => (
                            <ListItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </Section>
                <Section title="Recycling Blog" flex={3}>
                    <ScrollView horizontal={true} style={styles.sideScroll} showsHorizontalScrollIndicator={false}>
                        <Card>
                            <AppText style={[styles.cardText, globalStyles.fontBlue]}>Remember to rinse recycling matters before putting it in the <AppText style={[globalStyles.backgroundTwo,globalStyles.fontWhite]}>blue bin</AppText></AppText>
                        </Card>
                        <Card>
                            <AppText style={[styles.cardText, globalStyles.fontBlue]}>Remember to rinse recycling matters before putting it in the <AppText style={[globalStyles.backgroundTwo,globalStyles.fontWhite]}>blue bin</AppText></AppText>
                        </Card>
                        <Card>
                            <AppText style={[styles.cardText, globalStyles.fontBlue]}>Remember to rinse recycling matters before putting it in the <AppText style={[globalStyles.backgroundTwo,globalStyles.fontWhite]}>blue bin</AppText></AppText> 
                        </Card>
                    </ScrollView>
                </Section>
            </View>
        </View>
    )
}

export default MainScreen


const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        marginLeft: -14,
        paddingHorizontal: 14,
        elevation: 1,
        paddingTop: 20,
        paddingBottom: 10,
        // borderBottomColor: "grey",
        // borderBottomWidth: 1,
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
        // borderWidth: 0.2,
        // borderColor: 'grey',
        color: "grey",
        marginLeft: 12,
    },
    clearInputButton: {
        justifyContent: "center",
        alignItems:"center",
        width: 36,
        height: 42,
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
    cardText: {
        width: "55%",
    },
    sideScroll: {
        overflow: "visible"
    }
})