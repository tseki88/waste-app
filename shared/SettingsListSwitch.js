import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Switch, View, Linking } from 'react-native'
import * as Permissions from 'expo-permissions'
import AppText from './AppText'
import globalStyles from '../styles/globalStyles'
import { AppStateVisibleContext } from '../context/globalContext'

const SettingsListSwitch = ({title, description}) => {
    
    const [locationPermission, setLocationPermission] = useState(null)
    
    const appStateVisible = useContext(AppStateVisibleContext)

    useEffect(() => {
        console.log(appStateVisible)
        const checkPermissionStatus = async () => {
            if (appStateVisible === "active") {
                const { status, permissions: { location: { ios } } } = await Permissions.getAsync(Permissions.LOCATION);
                console.log("checkingPermission")
                if(status === "granted") {
                    return setLocationPermission(true)
                } else if(status !== 'granted') {
                    // Goes to city selection screen
                    console.log("it isn't granted")
                    return setLocationPermission(false)
                } else {
                    throw new Error("permission denied")
                }
            };
        }

        checkPermissionStatus()
    }, [appStateVisible])

    const openPermission = () => {
        Linking.openSettings()
    }

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
