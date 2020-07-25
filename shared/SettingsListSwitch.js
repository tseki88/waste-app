import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, Switch, View, Linking, AppState } from 'react-native'
import * as Permissions from 'expo-permissions'
import AppText from './AppText'
import globalStyles from '../styles/globalStyles'
import { useFocusEffect } from '@react-navigation/native'
import { apps } from 'firebase'
import { UpdateMunicipalityContext } from '../context/globalContext'

const SettingsListSwitch = ({title, description}) => {
    


    // Issues with switch updating
    const appState = useRef(AppState.currentState)
    const [appStateVisible, setAppStateVisible] = useState(null)
    const [locationPermission, setLocationPermission] = useState(null)
    
    const setUserMunicipality = useContext(UpdateMunicipalityContext)

    useEffect(() => {
        const checkPermissionStatus = async () => {
            const { status, permissions: { location: { ios } } } = await Permissions.getAsync(Permissions.LOCATION);
            console.log("checkingPermission")
            if(status === "granted") {
                // Closes this Screen
                console.log("it is granted")
                // Call the check localAsync userMunicipality funciton, and then plug into below context.
                // setUserMunicipality((prev) => {
                //     return prev
                // })
                return setLocationPermission(true)
            } else if(status !== 'granted') {
                // Goes to city selection screen
                console.log("it isn't granted")
                return setLocationPermission(false)
            } else {
                throw new Error("permission denied")
            }
        };

        checkPermissionStatus()
    }, [appStateVisible])


    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange)

        return () => {
            AppState.removeEventListener("change", _handleAppStateChange)
        }
    },[])

    const _handleAppStateChange = (nextAppState) => {
        appState.current = nextAppState
        setAppStateVisible(appState.current)
    }

    const openPermission = () => {
        Linking.openSettings()
    }

    // useFocusEffect(() => {
    //     const checkPermissionStatus = async () => {
    //         const { status, permissions: { location: { ios } } } = await Permissions.askAsync(Permissions.LOCATION);
    //         console.log("checkingPermission")
    //         if(status === "granted") {
    //             // Closes this Screen
    //             console.log("it is granted")
    //             return setLocationPermission(true)
    //         } else if(status !== 'granted') {
    //             // Goes to city selection screen
    //             console.log("it isn't granted")
    //             return setLocationPermission(false)
    //         } else {
    //             throw new Error("permission denied")
    //         }
    //     };
    //     checkPermissionStatus()
    // }, [locationPermission])

    return (
        <View style={styles.listItem}>
            <View style={{width: "80%"}}>
                <AppText style={{marginBottom: 5}}>{title}</AppText>
                <View>
                    <AppText style={globalStyles.fontGrey}>{description}</AppText>
                </View>
            </View>
            <View style={{paddingLeft:30}}>
                <Switch 
                    value={locationPermission}
                    onChange={openPermission} //opens the settings menu
                    // onValueChange={openPermission}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    thumbColor="white"
                    trackColor={{false:"#6E6E6E", true:"#0945DE"}}    
                />
            </View>
        </View>
    )
}

export default SettingsListSwitch

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
    }
})
