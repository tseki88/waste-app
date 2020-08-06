import React from 'react'
import { StyleSheet, View, ScrollView, AsyncStorage } from 'react-native'
import globalStyles from '../styles/globalStyles'
import SettingsListSwitch from '../shared/SettingsListSwitch'
import SettingsListTouchable from '../shared/SettingsListTouchable'
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
                />
                <SettingsListTouchable
                    title="Contact Us"
                    description="Have a suggestion or feature request? Shoot us an email!"
                    onPressHandler={openMail}
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
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
    },
})
