import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import Card from '../shared/Card'

const SettingScreen = () => {
    
    return (
        <ScrollView>
            <View style={styles.listItem}>
                <Text style={globalStyles.fontBase}>This Setting</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={globalStyles.fontBase}>This Setting</Text>
            </View>
        </ScrollView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.2,
        paddingLeft: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
    },
})
