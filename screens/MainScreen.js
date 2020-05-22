import React, { useState, useContext } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Dimensions, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import AppText from '../shared/AppText'
import Card from '../shared/Card'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import ListItem from '../shared/ListItem'

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

    // get the name/id only for top items, then render based on imported master data

    const pressHandler = ({name, tag, description}) => {
        navigation.navigate("ItemDetails", {
            name: name,
            tag: tag,
            description: description
        })
    }

    // Pressing Search Button => navigate to search
    return (
        <View style={[globalStyles.container, {paddingTop: 10}]}>
            <View style={globalStyles.wrapper}>
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
    cardText: {
        width: "55%",
    },
    sideScroll: {
        overflow: "visible"
    }
})