import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Clipboard, AsyncStorage } from 'react-native'
import MapView from 'react-native-maps'
import * as WebBrowser from 'expo-web-browser'
import { Linking } from 'expo'
import { AntDesign } from '@expo/vector-icons'

import Section from '../shared/Section'
import AppText from '../shared/AppText'

import globalStyles from '../styles/globalStyles'
import AccordionContainer from '../shared/AccordionContainer'

const LocationDetails = ({ route }) => {

    const { name, municipality, address, hours, closed, direction, lat, long, website, acceptedItems } = route.params.item
    // Also have a route.params. => coming from search screen, location enabled
    const [userLocation, setUserLocation] = useState({})
    const [distance, setDistance] = useState(0)

    // console.log(acceptedItems)

    const copyToClipBoard = (value) => {
        Clipboard.setString(value)
    }

    const openLink = (link) => {
        Linking.openURL(link)
    }

    const openAppBrowser = (link) => {
        WebBrowser.openBrowserAsync(link)
    }

    const retrieveData = async () => {
        console.log("retrieving")
        try {
            const value = await AsyncStorage.getItem('userLocation');
            if (value !== null) {
                setUserLocation(JSON.parse(value))
                setDistance(computeDistance([userLocation.latitude, userLocation.longitude],[lat, long]).toFixed(1))
            }
        } catch (error) {
            return
        }
    };

    const computeDistance = ([prevLat, prevLong], [lat, long]) => {
        const prevLatInRad = toRad(prevLat);
        const prevLongInRad = toRad(prevLong);
        const latInRad = toRad(lat);
        const longInRad = toRad(long);

        console.log(userLocation)
        console.log(prevLatInRad, prevLongInRad, latInRad, longInRad)

        return (
            // In kilometers
            6377.830272 *
            Math.acos(
                Math.sin(prevLatInRad) * Math.sin(latInRad) +
                Math.cos(prevLatInRad) * Math.cos(latInRad) * Math.cos(longInRad - prevLongInRad),
            )
        );
    }

    const toRad = (angle) => {
        return (angle * Math.PI) / 180;
    }

    useEffect(() => {
        retrieveData()
    }, [distance])

    console.log("location component rerendered")

    return (
        <View style={{ flex: 1, position: "relative" }}>
            <ScrollView style={globalStyles.container}>
                <View style={globalStyles.wrapper}>
                    <Section title={name}>
                        <AppText>{!isNaN(distance) ? distance : "--" } km away</AppText>
                    </Section>
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.mapStyle}
                            initialRegion={{
                                latitude: parseFloat(lat),
                                longitude: parseFloat(long),
                                latitudeDelta: 0.03,
                                longitudeDelta: 0.03,
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
                                <AppText style={globalStyles.fontBlue}>Copy Address</AppText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => openLink(direction)}>
                                <AppText style={globalStyles.fontBlue}>Get Directions</AppText>
                            </TouchableOpacity>
                        </View>
                    </Section>
                    <Section title="Hours of Operation">
                        {
                            hours.length > 1
                                ?
                                hours.map((e) => {
                                    return (
                                        <View style={{ marginBottom: 14 }} key={e.key}>
                                            <AppText style={{ fontWeight: "bold", marginBottom: 10 }}>{e.name}</AppText>
                                            <View style={{ marginBottom: 14, flexDirection: "row", flexWrap: "nowrap" }}>
                                                <View>
                                                    <AppText>Monday </AppText>
                                                    <AppText>Tuesday </AppText>
                                                    <AppText>Wednesday </AppText>
                                                    <AppText>Thursday </AppText>
                                                    <AppText>Friday </AppText>
                                                    <AppText>Saturday </AppText>
                                                    <AppText>Sunday </AppText>
                                                </View>
                                                <View style={{marginLeft: 26}}>
                                                    <AppText>{e.mon}</AppText>
                                                    <AppText>{e.tues}</AppText>
                                                    <AppText>{e.wed}</AppText>
                                                    <AppText>{e.thurs}</AppText>
                                                    <AppText>{e.fri}</AppText>
                                                    <AppText>{e.sat}</AppText>
                                                    <AppText>{e.sun}</AppText>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                                :
                                <View style={{ marginBottom: 14, flexDirection: "row", flexWrap: "nowrap" }}>
                                    <View>
                                        <AppText>Monday </AppText>
                                        <AppText>Tuesday </AppText>
                                        <AppText>Wednesday </AppText>
                                        <AppText>Thursday </AppText>
                                        <AppText>Friday </AppText>
                                        <AppText>Saturday </AppText>
                                        <AppText>Sunday </AppText>
                                    </View>
                                    <View style={{marginLeft: 26}}>
                                        <AppText>{hours[0].mon}</AppText>
                                        <AppText>{hours[0].tues}</AppText>
                                        <AppText>{hours[0].wed}</AppText>
                                        <AppText>{hours[0].thurs}</AppText>
                                        <AppText>{hours[0].fri}</AppText>
                                        <AppText>{hours[0].sat}</AppText>
                                        <AppText>{hours[0].sun}</AppText>
                                    </View>
                                </View>
                        }
                        <AppText style={{ fontWeight: "bold" }}>Closed</AppText>
                        <AppText>{closed}</AppText>
                    </Section>
                    <Section title="Website">
                        <AppText>
                            <AppText style={styles.link} onPress={() => openAppBrowser(website)}>
                                {/* 'https://www.york.ca/wps/portal/yorkhome/environment/yr/garbageandrecycling/wastedepots' */}
                                Click here
                            </AppText> to visit {municipality}'s Drop-Off Depot Locations Website.
                        </AppText>
                    </Section>
                    <Section title="Accepted Items">
                        <View style={styles.card}>
                            <AntDesign name="checkcircleo" size={20} color="#50575D" />
                            <View style={{ marginHorizontal: 16 }}>
                                <AppText>You searched for XXXX. This item is accepted at this facility.</AppText>
                            </View>
                        </View>
                        <AccordionContainer acceptedItems={acceptedItems} />
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
        borderRadius: 10,
        overflow: "hidden"
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
    },
    link: {
        color: "blue",
        textDecorationLine: "underline"
    },
    card: {
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: "#004EE7",
        shadowColor: "#004EE7",
        flexDirection: "row",
        alignItems: "center",
        // marginRight: 8,
        // marginHorizontal: 6,
        padding: 16
    }
})
