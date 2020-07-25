import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard, Button, Linking } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import * as Permissions from 'expo-permissions'
import Card from '../shared/Card'
import AppText from '../shared/AppText'
import SettingsListSwitch from '../shared/SettingsListSwitch'
import SettingsListTouchable from '../shared/SettingsListTouchable'
import ModalContactForm from './ModalContactForm'
import * as MailComposer from 'expo-mail-composer'

const SettingScreen = () => {
    
    // const [modalVisible, setModalVisible] = useState(false)

    const openMail = () => {
        MailComposer.composeAsync({
            recipients:["contact.littr@gmail.com"],
            subject: "Hello Littr App Team",
        }).then((resolve) => {
            console.log("sent?"+ resolve)
        }).catch((error) => console.log(error))
    }
    // const [locationPermission, setLocationPermission] = useState(null)

    // useEffect(() => {
    //     const checkPermissionStatus = async () => {
    //         const { status, permissions: { location: { ios } } } = await Permissions.getAsync(Permissions.LOCATION);
    //         console.log("checkingPermission")
    //         if(status === "granted") {
    //             // Closes this Screen
    //             return setLocationPermission(true)
    //         } else if(status !== 'granted') {
    //             // Goes to city selection screen
    //             // console.log("permission denied")
    //             return setLocationPermission(false)
    //         } else {
    //             throw new Error("permission denied")
    //         }
    //     };
    //     checkPermissionStatus()
    // },[])

    // const openPermission = () => {
    //     Linking.openSettings()
    // }

    return (
        <ScrollView style={globalStyles.container}>
            {/* <ModalContactForm modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
            <View style={globalStyles.wrapper}>
                <SettingsListSwitch
                    title="Enable Location"
                    description="littr uses location to show you nearby drop-off centers."
                    // openPermission={openPermission}
                    // locationPermission={locationPermission}
                    // setLocationPermission={setLocationPermission}
                />
                <SettingsListTouchable
                    title="Contact Us"
                    description="Have a suggestion or feature request? Shoot us an email!"
                    // onPressHandler={() => setModalVisible(true)}
                    onPressHandler={openMail}
                    // presshandler of email modal to be displayed
                />
            </View>
        </ScrollView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.2,
        // paddingLeft: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
    },
})
