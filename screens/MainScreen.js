import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, FlatList, Image, ScrollView, Dimensions } from 'react-native'
import AppText from '../shared/AppText'
import Card from '../shared/Card'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import ListItem from '../shared/ListItem'
import { TopSearchContext, DataContext, UserMunicipalityContext } from '../context/globalContext'
// import ViewPager from '@react-native-community/viewpager'

import tip1 from '../assets/tipcardImg/tip1.png'
import tip2 from '../assets/tipcardImg/tip2.png'
import tip3 from '../assets/tipcardImg/tip3.png'

const { width, height } = Dimensions.get('window');

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

    const pressHandler = ({name, tag, description,image,category,subCategory}) => {
        navigation.navigate("ItemDetails", {
            name: name,
            tag: tag,
            image:image,
            description: description,
            category: category,
            subCategory: subCategory
        })
    }

    // Pressing Search Button => navigate to search
    return (
        <ScrollView style={[globalStyles.container, {paddingTop: 10, flex: 1, minHeight: height}]}>
            <View style={globalStyles.wrapper}>
                <Section title="Top Searches" flex={5} list={true}>
                    {
                        topSearch.map((item) => {
                            return <ListItem key={item.name} item={item} pressHandler={pressHandler}/>
                        })
                    }
                </Section>
                <Section title="Ontario Disposal Tips" flex={4}>
                    <ScrollView 
                        style={{flex:1, marginTop:10}}
                        horizontal={true} 
                        snapToOffsets={[0,1,2].map((x, i) => (i * (width - 150)) )}
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                    >
                    {/* <ViewPager style={{flex: 1}} pageMargin={-100}> */}
                        <View style={{display: "flex", justifyContent:"center", alignItems: "flex-start"}} key="1">
                            <Card>
                                <AppText style={[styles.cardText, globalStyles.fontBlue]}>Remember to rinse recycling matters before putting it in the blue bin.</AppText>
                                <Image 
                                    style={styles.cardImage}
                                    source={tip1}
                                    />
                            </Card>
                        </View>
                        <View style={{display: "flex", justifyContent:"center", alignItems: "center"}} key="2">
                            <Card>
                                <AppText style={[{width: "45%"}, globalStyles.fontGrey]}>Dispose of your broken glass or ceramics in the garbage bin.</AppText>
                                <Image 
                                    style={styles.cardImage}
                                    source={tip2}
                                    />
                            </Card>
                        </View>
                        <View style={{display: "flex", justifyContent:"center", alignItems: "flex-end"}} key="3">
                            <Card>
                                <View style={styles.cardText}>
                                    <AppText style={globalStyles.fontGrey}>Straws belong in the garbage bin, <AppText style={globalStyles.fontBlue}>but clear plastic cups can be placed in the recycling.</AppText></AppText> 
                                </View>
                                <Image 
                                    style={styles.cardImage}
                                    source={tip3}
                                    />
                            </Card>
                        </View>
                    {/* </ViewPager> */}
                    </ScrollView>
                </Section>
            </View>
        </ScrollView>
    )
}

export default MainScreen


const styles = StyleSheet.create({
    cardText: {
        width: "60%",
    },
    cardImage: {
        width: 167, 
        height: 111, 
        position: "absolute", 
        right: 0,
        bottom: 0
    },
    sideScroll: {
        overflow: "visible"
    }
})