import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, AsyncStorage } from 'react-native'
import globalStyles from '../styles/globalStyles'
import AppText from '../shared/AppText'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

const InitialAppLoadScreen = ({setInitialAppLoad}) => {

    // Prompt Permission on this Component. If the user denies permission, change state for conditional rendering.

    const [permissionGranted, setPermissionGranted] = useState(null)

    const promptLocationPermission = async () => {
        const { status, permissions: { location: { ios } } } = await Permissions.askAsync(Permissions.LOCATION);
        
        if(status === "granted") {
            // Closes this Screen
            changeInitialAppLoad()
            return setInitialAppLoad(false)
        } else if(status !== 'granted') {
            // Goes to city selection screen
            console.log("permission denied")
            return setPermissionGranted(false)
        } else {
            throw new Error("permission denied")
        }
    }

    const changeInitialAppLoad = async () => {
        try {
            await AsyncStorage.setItem('initialAppLoad', "false");
            console.log("asyncStorage initialAppLoad set to false")
        } catch (error) {
            console.log("failed to save in storeData asyncStorage")
        }
    };

    const municipalitySelect = async (municipality) => {
        try {
            await AsyncStorage.setItem('userMunicipality', municipality);
            console.log(`userMunicipality set to ${municipality}`)
            changeInitialAppLoad()
            return setInitialAppLoad(false)
        } catch (error) {
            console.log("failed to set userMunicipality")
        }
    }


    // Render Options
    const locateMeText = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={[globalStyles.headerOne, globalStyles.fontWhite, styles.header]}>Locate Me</Text>
                <AppText style={[globalStyles.fontWhite, styles.text]}>We would like to access your location in order to provide accurate waste disposal information based on your location.</AppText>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={promptLocationPermission}
                    >
                        <AppText style={globalStyles.fontBlue}>Next</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const selectCityText = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={[globalStyles.headerOne, globalStyles.fontWhite, styles.header]}>Where is Your Waste Going?</Text>
                <AppText style={[globalStyles.fontWhite, styles.text]}>Select a region so that you get the most relevant waste disposal instructions. You can change this at any time.</AppText>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => municipalitySelect("City of Toronto")}>
                        <AppText style={globalStyles.fontBlue}>City of Toronto</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => municipalitySelect("York Region")}>
                        <AppText style={globalStyles.fontBlue}>York Region</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <View style={[globalStyles.container, globalStyles.backgroundTwo, { justifyContent: "space-between" }]}>
            {
                permissionGranted === null
                    ?
                    locateMeText()
                    :
                    selectCityText()
            }

            <View style={styles.imageContainer}>
                <Image source={require('../assets/img/locateMe.png')} style={{ width: undefined, height: undefined, flex: 1 }} />
            </View>
        </View>
    )
}

export default InitialAppLoadScreen

const styles = StyleSheet.create({
    textContainer: {
        flex: 3,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 40
    },
    header: {
        textAlign: "center",
        marginTop: 56,
        marginBottom: 14,
        fontSize: 30,
        lineHeight: 34
    },
    text: {
        textAlign: "center"
    },
    imageContainer: {
        flex: 2
    },
    buttonContainer: {
        marginVertical: 20,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: 145,
        height: 40,
        borderRadius: 4,
        marginVertical: 10,
    }
})
