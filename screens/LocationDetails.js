import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'
import { Linking } from 'expo'
import AppText from '../shared/AppText'
import * as WebBrowser from 'expo-web-browser'

const LocationDetails = ({route}) => {

    const {name, municipality ,address, hours, closed, direction, lat, long, website} = route.params.item
    
    const copyToClipBoard = (value) => {
        Clipboard.setString(value)
    }

    const openLink = (link) => {
        Linking.openURL(link)
    }

    const openAppBrowser = (link) => {
        WebBrowser.openBrowserAsync(link)
    }

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
                                    <AppText  style={globalStyles.fontBlue}>Copy Address</AppText>
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
                                <View style={{marginBottom: 14}} key={e.key}>
                                    <AppText style={{fontWeight: "bold", marginBottom: 10}}>{e.name}</AppText>
                                    <View>
                                        <AppText>Monday: {e.mon}</AppText>
                                        <AppText>Tuesday: {e.tues}</AppText>
                                        <AppText>Wednesday: {e.wed}</AppText>
                                        <AppText>Thursday: {e.thurs}</AppText>
                                        <AppText>Friday: {e.fri}</AppText>
                                        <AppText>Saturday: {e.sat}</AppText>
                                        <AppText>Sunday: {e.sun}</AppText>
                                    </View>
                                </View>
                            )
                        })
                        :
                        <View style={{marginBottom: 14}}>
                            <AppText>Monday: {hours[0].mon}</AppText>
                            <AppText>Tuesday: {hours[0].tues}</AppText>
                            <AppText>Wednesday: {hours[0].wed}</AppText>
                            <AppText>Thursday: {hours[0].thurs}</AppText>
                            <AppText>Friday: {hours[0].fri}</AppText>
                            <AppText>Saturday: {hours[0].sat}</AppText>
                            <AppText>Sunday: {hours[0].sun}</AppText>
                        </View>
                    }
                        <AppText style={{fontWeight: "bold"}}>Closed</AppText>
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
    },
    link: {
        color: "blue",
        textDecorationLine: "underline"
    }
})
