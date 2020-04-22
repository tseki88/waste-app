import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Tag from '../shared/Tag'
import AppText from '../shared/AppText'
import { depotData } from '../sampleData'
import ListItem from '../shared/ListItem'

const ItemDetailScreen = ({route, navigation}) => {

    const {name, tag, image = null, description} = route.params;

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
                <View style={styles.image}>
                    <Image source={image} />
                    <Text>Img Placeholder</Text>
                </View>
                <Section title="How to discard item">
                    {/* <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} >{description}</AppText> */}
                    {splitDescription.map((e,i) => (
                        <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} key={i} >{e}.</AppText>
                    ))}
                </Section>
                <AppText style={globalStyles.headerTwo}>Drop off centers nearby</AppText>
            </View>
        )
    }

    return (
        <FlatList
            data={depotData}
            renderItem={({item}) => {                            
                return (
                    <View style={globalStyles.wrapper}>
                        <ListItem item={item} pressHandler={() => pressHandler(item)}/>
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
