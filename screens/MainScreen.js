import React, { useState, useContext } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Dimensions, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import AppText from '../shared/AppText'
import Card from '../shared/Card'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import ListItem from '../shared/ListItem'
import { MunicipalityContext } from '../App'

const MainScreen = ({navigation}) => {

    const [topSearch, setTopSearch] = useState([
        {
            "name": "Single Use Coffee Pod",
            "description": "Please place this item in the garbage.  Consider using a reusable coffee filter suitable for your device.",
            "search": "\nSingle Use Coffee Pod,Keurig,Tassimo,Kcup,K-cup,Keurig Coffee Pod,Keurig Pod,Tassimo Coffee Pod,Tassimo Pod,Coffee Pod,Pod,Coffee Pods,Plastic Coffee Pods",
            "tag": [
                "Garbage"
            ],
            "category": "Food and beverage containers",
            "subCategory": "Disposable containers/utensils"
        },
        {
            "name": "Styrofoam Cups/Dishes/Containers",
            "description": "Please place this item in the garbage.",
            "search": "\nStyrofoam Cups/Dishes/Containers,Cup,Plate,Takeout,Coffee,Foam,Meat Tray,Packaging Peanuts,Expanded Polystyrene,EPS Foam,Clamshell,Styrofoam Clamshell,Styrofoam Peanuts",
            "tag": [
                "Garbage"
            ],
            "category": "Food and beverage containers",
            "subCategory": "Disposable containers/utensils"
        },
        {
            "name": "Take-Out Cup Lid",
            "description": "Please place this item in the garbage.",
            "search": "\nTake-Out Cup Lid,Plastic Lid,Lid,Paper Cup Lid,Coffee Cup Lid,Soft Drink Lid",
            "tag": [
                "Garbage"
            ],
            "category": "Food and beverage containers",
            "subCategory": "Disposable containers/utensils"
        },
    ])

    // const [topSearch, setTopSearch] = useState([
    //     { 
    //         name: "Paint",
    //         count: 10,
    //     },
    //     { 
    //         name: "Take-Out Cup Lid",
    //         count: 8,
    //     },
    //     { 
    //         name: "Single Use Coffee Pod",
    //         count: 4,
    //     },
    // ])

    const [nearest, setNearest] = useState([
        { location: "City of Toronto", key: "1" },
        { location: "York Region", key: "2" },
    ])

    const setUserMunicipality = useContext(MunicipalityContext)
    // get the name/id only for top items, then render based on imported master data

    const pressHandler = ({name, tag, description}) => {
        navigation.navigate("ItemDetails", {
            name: name,
            tag: tag,
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
                        {nearest.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.each} onPress={() => setUserMunicipality(item.location)}>
                                    <AppText key={i}>{item.location}</AppText>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <Section title="Top Searches" flex={4} list={true}>
                    <FlatList
                        data={topSearch}
                        keyExtractor={item => item.name}
                        renderItem={({item}) => (
                            <ListItem key={item.name} item={item} pressHandler={pressHandler}/>
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
        marginLeft: -18,
        paddingHorizontal: 18,
        elevation: 1,
        paddingTop: 30,
        paddingBottom: 10,
        // borderBottomColor: "grey",
        // borderBottomWidth: 1,
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
        borderWidth: 0.4,
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