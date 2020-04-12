import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const Section = ({title, flex, children}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
        

    return (
        <View style={[styles.section,{flex: flex ? flex : 1}]}>
            <Text style={[globalStyles.headerTwo, globalStyles.fontBlackPrimary, styles.header]}>{capitalize(title)}</Text>
            {children}
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    section: {
        marginTop: 15,
    },
    header: {
        marginBottom: 10,
    }
})