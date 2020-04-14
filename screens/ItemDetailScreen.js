import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Tag from '../shared/Tag'
import AppText from '../shared/AppText'

const ItemDetailScreen = ({route, navigation}) => {

    const {name, tags, image, description} = route.params;

    const pressHandler = () => {
        navigation.navigate("LocationDetails")
    }

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                {/* Need to pass in this section into the Header */}
                <Section title={name}>
                        {tags.map((e, i) => (
                            <Tag type={e} key={i} />
                            ))}
                </Section>
                <View style={styles.image}>
                    <Image source={image} />
                    <Text>Img Placeholder</Text>
                </View>
                <Section title="How to discard item">
                    {description.map((e,i) => (
                        <AppText style={[styles.paragraph, globalStyles.fontBlackPrimary]} key={i} >{e}</AppText>
                    ))}
                </Section>
                <Section title="Drop off centers nearby">
                    <TouchableOpacity onPress={pressHandler}>
                        <View>
                            <AppText>Location Placeholder</AppText>
                        </View>
                    </TouchableOpacity>
                </Section>
            </View>
        </ScrollView>
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
