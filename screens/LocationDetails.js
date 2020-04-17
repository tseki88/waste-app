import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'
import { Linking } from 'expo'
import AppText from '../shared/AppText'
import { depotData } from '../sampleData'
import { add } from 'react-native-reanimated'

const LocationDetails = () => {
    
    const {name, address, hours, closed, phone, direction, lat, long} = depotData[0]
    
    const copyToClipBoard = (value) => {
        Clipboard.setString(value)
    }

    const openDirection = (link) => {
        Linking.openURL(link)
    }
    
    // const openLocation = () => {
    //     Linking.openURL("geo:37.484847,-122.148386")
    // }


    return (
        <View style={{flex: 1, position: "relative"}}>
            <ScrollView style={globalStyles.container}>
                <View style={globalStyles.wrapper}>
                    <Section title={name}>
                        <AppText>-- km away</AppText>
                    </Section>
                    <View style={styles.mapContainer}>
                        <MapView 
                            style={styles.mapStyle}
                            initialRegion={{
                                latitude: parseFloat(lat),
                                longitude: parseFloat(long),
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: parseFloat(lat),
                                    longitude: parseFloat(long)
                                }}
                            />
                        </MapView>
                    </View>
                    <Section title="Address">
                            <AppText>{address}</AppText>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => copyToClipBoard(address)}>
                                    <AppText  style={globalStyles.fontBlue}>Copy Address</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => openDirection(direction)}>
                                    <AppText style={globalStyles.fontBlue}>Get Directions</AppText>
                            </TouchableOpacity>
                        </View>
                    </Section>
                    <Section title="Hours of Operation">
                        <AppText>Monday: {hours.mon}</AppText>
                        <AppText>Tuesday: {hours.tues}</AppText>
                        <AppText>Wednesday: {hours.wed}</AppText>
                        <AppText>Thursday: {hours.thurs}</AppText>
                        <AppText>Friday: {hours.fri}</AppText>
                        <AppText>Saturday: {hours.sat}</AppText>
                        <AppText>Sunday: {hours.sun}</AppText>
                        <AppText style={{fontWeight: "bold"}}>Closed</AppText>
                        <AppText>{closed}</AppText>
                    </Section>
                    <Section title="Contact Info">
                        <AppText>{phone}</AppText>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => copyToClipBoard(phone)}>
                                <AppText style={globalStyles.fontBlue}>Copy Number</AppText>
                            </TouchableOpacity>
                        </View>
                    </Section>
                    <Section title="Accepted Items">
                        <Card>
                            <AppText>CheckIcon! You searched for XXXX. This item is accepted at this facility.</AppText>
                        </Card>
                        <AppText>List Placeholder</AppText>
                    </Section>
                </View>
            </ScrollView>
            {/* <View style={styles.notification}>
                <AppText style={styles.notificationText}>Address has been copied to clipboard.</AppText>
            </View> */}
        </View>
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
        alignItems: "center",
        paddingVertical: 9,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#0945DE",
        borderRadius: 4,
        marginRight: 16,
    },
    notification: {
        display: "flex",
        position: "absolute",
        bottom: "5%",
        alignItems: "center",
        width: "100%"
    },
    notificationText: {
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: "lightgrey",
        lineHeight: 50,
        height: 50,
    }
})
