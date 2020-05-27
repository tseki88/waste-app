import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'
import globalStyles from '../styles/globalStyles'

const SettingsListTouchable = ({title, description, onPressHandler=null}) => {

    return (
        <TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
            <View style={{width: "80%"}}>
                <AppText style={{marginBottom: 5}}>{title}</AppText>
                <View>
                    <AppText style={globalStyles.fontGrey}>{description}</AppText>
                </View>
            </View>
            <View style={{paddingLeft:30}}>
                <AntDesign name="right" size={18} color="#50575D" /> 
            </View>
        </TouchableOpacity>
    )
}

export default SettingsListTouchable

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
