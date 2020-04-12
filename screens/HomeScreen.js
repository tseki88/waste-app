import React, { useState } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import Card from '../shared/Card'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../shared/AppText'
import ListItem from '../shared/ListItem'

const HomeScreen = ({navigation}) => {
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
            <ScrollView>
                <View style={globalStyles.wrapper}>
                    <Section title="Top Searches" flex={4}>
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
                                <AppText style={[styles.cardText, globalStyles.fontBlue]}>Remember to rinse recycling matters before putting it in the <AppText style={styles.highlight}>blue bin</AppText></AppText>
                            </Card>
                            <Card>
                                <AppText style={styles.cardText}>Remember to rinse recycling matters before putting it in the <AppText style={styles.highlight}>blue bin</AppText></AppText>
                            </Card>
                            <Card>
                                <AppText style={styles.cardText}>Remember to rinse recycling matters before putting it in the</AppText> 
                                <View style={styles.highlight}><AppText>blue bin</AppText></View>
                            </Card>
                        </ScrollView>
                    </Section>
                </View>
        </ScrollView>
            </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardText: {
        width: "55%",
    },
    highlight: {
        backgroundColor: "#004de8",
        color: "#fff",
    },
    sideScroll: {
        overflow: "visible"
    }
})
