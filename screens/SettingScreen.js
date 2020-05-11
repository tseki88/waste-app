import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard, Button, Linking } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'
import AppText from '../shared/AppText'
import SettingsListSwitch from '../shared/SettingsListSwitch'
import SettingsListTouchable from '../shared/SettingsListTouchable'

const SettingScreen = () => {
    
    const openPermission = () => {
        Linking.openSettings()
    }

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <SettingsListSwitch
                    title="Enable Location"
                    description="littr uses location to show you nearby drop-off centers."
                    openPermission={openPermission}
                />
                <SettingsListTouchable
                    title="Contact Us"
                    description="Have a suggestion or feature request? Shoot us an email!"
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
