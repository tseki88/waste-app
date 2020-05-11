import React, { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'
import globalStyles from '../styles/globalStyles'

const SettingsListSwitch = ({title, description, openPermission}) => {
    const [test, setTest] = useState(false)
    
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
                    value={test}
                    onChange={openPermission} //opens the settings menu
                    // onValueChange={fetches permission status and shows current state of the permission }
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
