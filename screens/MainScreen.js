import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Dimensions, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import AppText from '../shared/AppText'
import Card from '../shared/Card'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import ListItem from '../shared/ListItem'
import { TopSearchContext, DataContext, UserMunicipalityContext } from '../context/globalContext'

const MainScreen = ({navigation}) => {

    const topSearchIndex = useContext(TopSearchContext)
    const itemData = useContext(DataContext)
    const userMunicipality = useContext(UserMunicipalityContext)


    const [topSearch, setTopSearch] = useState([])

    useEffect(() => {
        
        const topArray = []

        for (let key in topSearchIndex) {
            topArray.push([key, topSearchIndex[key]["count"]])
        }
        
        topArray.sort((a,b) => {
            return a[1] > b[1] ? -1 : 1
        })
        
        const topData = topArray.map((each) => {
            return itemData["municipality"][userMunicipality]["items"][parseInt(each[0])]
        })

        setTopSearch(topData)

    }, [topSearchIndex])

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