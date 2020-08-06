import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import globalStyles from '../styles/globalStyles'
import Section from '../shared/Section'
import AppText from '../shared/AppText'
import ListItem from '../shared/ListItem'
import Tag from '../shared/Tag'

import { DataContext, UserMunicipalityContext } from '../context/globalContext'

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

            if (exists[0] !== undefined) {
                exists.sort((a, b) => {
                    return parseInt(a.distance) < parseInt(b.distance) ? -1 : 1
                })
            }
            
            setDepotData(exists.slice(0,2))

        } else if (userMunicipality === "City of Toronto") {

            const exists = data.municipality[userMunicipality].depots.filter((each) => {
                return each.acceptedItems.some((items) => {
                    
                    // Will add subCategory matches for each item, for it to fall into facility category/subcategory of accepted items which it applies to
                    return items.subCategory.includes(tag) === true || items.category.includes(tag) === true || items.subCategory.includes(subCategory)
                    
                })
            })
            
            if (exists[0] !== undefined) {
                exists.sort((a, b) => {
                    return parseInt(a.distance) < parseInt(b.distance) ? -1 : 1
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
                <Section title={name} plusSize={true}>
                        {tag.map((e, i) => (
                            <Tag type={e} key={i} />
                            ))}
                </Section>
                <Section title="How to discard item">
                    {splitDescription.map((e,i) => (
                        <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} key={i} >{e}.</AppText>
                    ))}
                </Section>
                {
                    depotData.length !== 0
                    ?
                    <AppText style={globalStyles.headerTwo}>Drop-off centers nearby</AppText>
                    :
                    null
                }
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
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
        </View>
    )    
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 20,
        width: "95%"
    }
})
