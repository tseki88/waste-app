import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Tag from '../shared/Tag'

const ItemDetailScreen = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate("LocationDetails")
    }

    return (
        <ScrollView style={globalStyles.wrapper}>
            <Section title="Item Name">
                <View style={styles.image}>
                    <Tag />
                    <Tag />
                    <Text>Image Placeholder</Text>
                </View>
            </Section>
            <Section title="How to discard item">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</Text>
                <Text>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Section>
            <Section title="Drop off centers nearby">
                
                <TouchableOpacity onPress={pressHandler}>
                    <View>
                        <Text>Location Placeholder</Text>
                    </View>
                </TouchableOpacity>
            </Section>
        </ScrollView>
    )
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    image: {
        height: 100,
    }
})
