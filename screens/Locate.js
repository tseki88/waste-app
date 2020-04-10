import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import globalStyles from '../styles/globalStyles'

const Locate = () => {

    

    return (
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.headerOne}>Locate Me</Text>
                <Text style={globalStyles.fontBase}>We would like to access your location, so that you get accurate waste disposal info based on your location.</Text>
            </View>
            <View>
                <Button title="Allow"/>
                <Button title="Don't Allow"/>
            </View>
        </View>
    )
}

export default Locate