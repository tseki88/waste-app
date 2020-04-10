import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'

const LocationDetails = () => {
    
    // Receive following data:
    // Location, Distance From (Conditional), Address, Link to GoogleMaps, Hours of Operation, contactInfo, General Info

    copyToClipBoard = () => {
        // To Do, Soft Notification that the string has been copied to clipboard
        Clipboard.setString("Test Test")
    }
    
    return (
        <ScrollView>
            <View style={globalStyles.wrapper}>
                <Section title="Georgina Waste Transfer Station">
                    <Text>1.6km away</Text>
                </Section>
                <View style={styles.mapContainer}>
                    <MapView style={styles.mapStyle} />
                </View>
                <Section title="Address">
                    <Text>Address Placeholder</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={copyToClipBoard}>
                                <Text  style={styles.buttonText}>Copy Address</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>
                </Section>
                <Section title="Hours of Operation">
                    <Text>Hours Table PlaceHolder</Text>
                </Section>
                <Section title="Contact Info">
                    <Text>Phone PlaceHolder</Text>
                    <TouchableOpacity style={styles.button} onPress={copyToClipBoard}>
                        <Text  style={styles.buttonText}>Copy Number</Text>
                    </TouchableOpacity>
                </Section>
                <Section title="Accepted Items">
                    <Card>
                        <Text>CheckIcon! You searched for XXXX. This item is accepted at this facility.</Text>
                        <Text>List Placeholder</Text>
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
        width: "100%",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    button: {
        width: "48%",
        alignItems: "center",
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 5,
    },
    buttonText: {
        color: "blue"
    }
})
