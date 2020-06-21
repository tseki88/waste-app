import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Tag from '../shared/Tag'
import AppText from '../shared/AppText'
// import { depotData } from '../sampleData'
import { DataContext, UserMunicipalityContext } from '../context/globalContext'
// need to go through current set of data and calculate the closest 3
import ListItem from '../shared/ListItem'

const ItemDetailScreen = ({route, navigation}) => {

    const {name, tag, image = null, description, category, subCategory} = route.params;

    const data = useContext(DataContext)
    const userMunicipality = useContext(UserMunicipalityContext)
    const [depotData, setDepotData] = useState([])

    useEffect(() => {
        if (userMunicipality === "York Region") {

            const exists = data.municipality[userMunicipality].depots.filter((each) => {
                return each.acceptedItems.some((items) => {
                    return items.subCategory.includes(subCategory) === true
                })
            })
            
            if (exists.distance !== undefined) {
                exists.sort((a, b) => {
                    return a.distance > b.distance ? -1 : 1
                })
            }
            
            setDepotData(exists.slice(0,2))

        } else if (userMunicipality === "City of Toronto") {

            const exists = data.municipality[userMunicipality].depots.filter((each) => {
                return each.acceptedItems.some((items) => {
                    return items.includes(tag) === true
                })
            })
            
            if (exists.distance !== undefined) {
                exists.sort((a, b) => {
                    return a.distance > b.distance ? -1 : 1
                })
            }
            
            setDepotData(exists.slice(0,2))
        }

    }, [])

    let splitDescription = description.split(". ")

    const pressHandler = (item) => {
        navigation.navigate("LocationDetails", item={item})
    }

    const getHeader = () => {
        return (
            <View style={globalStyles.wrapper}>
                {/* Confirm if need to pass in this section into the Header */}
                <Section title={name}>
                        {tag.map((e, i) => (
                            <Tag type={e} key={i} />
                            ))}
                </Section>
                {/* <View style={styles.image}>
                    <Image source={image} />
                    <Text>Img Placeholder</Text>
                </View> */}
                <Section title="How to discard item">
                    {/* <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} >{description}</AppText> */}
                    {splitDescription.map((e,i) => (
                        <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} key={i} >{e}.</AppText>
                    ))}
                </Section>
                {
                    depotData.length !== 0
                    ?
                    <AppText style={globalStyles.headerTwo}>Drop off centers nearby</AppText>
                    :
                    null
                }
            </View>
        )
    }

    return (
        <FlatList
            data={depotData}
            renderItem={({item}) => {                            
                return (
                    <View style={globalStyles.wrapper}>
                        <ListItem item={item} depot={true} pressHandler={() => pressHandler(item)}/>
                    </View>
                )
            }}
            ListHeaderComponent={getHeader}
        />
    )    
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    image: {
        height: 100,
    },
    paragraph: {
        marginBottom: 20,
        width: "90%"
    }
})
