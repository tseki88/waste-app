import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const Section = ({title, flex, children}) => {
    return (
        <View style={[styles.section, {flex: flex}]}>
            <Text style={[globalStyles.headerTwo, styles.header]}>{title}</Text>
            {children}
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    section: {
        marginTop: 15,
        marginBottom: 10,
    },
    header: {
        marginBottom: 8,
    }
})