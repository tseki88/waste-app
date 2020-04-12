import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'
import { Linking } from 'expo'
import AppText from '../shared/AppText'

const LocationDetails = () => {
    
    const copyToClipBoard = () => {
        Clipboard.setString("Test Test")
    }

    const openDirection = () => {
        Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=georgina+waste+depot")
    }
    
    const openLocation = () => {
        Linking.openURL("geo:37.484847,-122.148386")
    }

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <Section title="Georgina Waste Transfer Station">
                    <AppText>1.6km away</AppText>
                </Section>
                <View style={styles.mapContainer}>
                    <MapView style={styles.mapStyle} />
                </View>
                <Section title="Address">
                    <AppText>Address Placeholder</AppText>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={copyToClipBoard}>
                                <AppText  style={styles.buttonText}>Copy Address</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={openDirection}>
                                <AppText style={styles.buttonText}>Get Directions</AppText>
                        </TouchableOpacity>
                    </View>
                </Section>
                <Section title="Hours of Operation">
                    <AppText>Hours Table PlaceHolder</AppText>
                </Section>
                <Section title="Contact Info">
                    <AppText>Phone PlaceHolder</AppText>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={copyToClipBoard}>
                            <AppText style={styles.buttonText}>Copy Number</AppText>
                        </TouchableOpacity>
                    </View>
                </Section>
                <Section title="Accepted Items">
                    <Card>
                        <AppText>CheckIcon! You searched for XXXX. This item is accepted at this facility.</AppText>
                        <AppText>List Placeholder</AppText>
                    </Card>
                </Section>
            </View>
        </ScrollView>
    )
}

export default LocationDetails

const styles = StyleSheet.create({

    mapContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    mapStyle: {
        width: "100%",
        height: 240,
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "nowrap",
        marginVertical: 20,
    },
    button: {
        // width: "48%",
        alignItems: "center",
        paddingVertical: 9,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#0945DE",
        borderRadius: 4,
        marginRight: 16,
    },
    buttonText: {
        color: "#0945DE"
    }
})
