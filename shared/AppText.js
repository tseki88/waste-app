import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const AppText = ({children, style}) => {
    return (
        <Text style={[globalStyles.fontBase, style]}>
            {children}
        </Text>

    )
}

export default AppText

// const styles = StyleSheet.create({})
