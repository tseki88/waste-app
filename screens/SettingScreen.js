import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard, Button, Linking, AsyncStorage } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import * as Permissions from 'expo-permissions'
import Card from '../shared/Card'
import AppText from '../shared/AppText'
import SettingsListSwitch from '../shared/SettingsListSwitch'
import SettingsListTouchable from '../shared/SettingsListTouchable'
import ModalContactForm from './ModalContactForm'
import * as MailComposer from 'expo-mail-composer'
import Toast from 'react-native-tiny-toast'

const SettingScreen = () => {
    
    const openMail = () => {
        MailComposer.composeAsync({
            recipients:["contact.littr@gmail.com"],
            subject: "Hello Littr App Team",
        }).then((resolve) => {
            console.log("sent?"+ resolve)
        }).catch((error) => console.log(error))
    }

    const clearLocal = async() => {
        try {
            await AsyncStorage.removeItem('recentSearch')
                .then(
                    Toast.show("Recent search has been cleared.", {
                        position: Toast.position.TOP,
                        containerStyle: {
                            backgroundColor: "#004EE7"
                        },
                        textStyle: globalStyles.fontBase
                    })
                )
                
        } catch (error) {
            return new Error("retrieve failed")
        }
    }

    return (
        <ScrollView style={globalStyles.container}>
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
                <SettingsListTouchable
                    title="Local History"
                    description="Clear local search history on this device."
                    onPressHandler={clearLocal}
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
