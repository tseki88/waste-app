import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const Card = (props) => {
    return (
        <View style={[globalStyles.backgroundOne, styles.card]}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        borderWidth: 1,
        width: 291,
        marginRight: 8,
        paddingVertical: 10,
        paddingLeft: 16,
        position: "relative",
        overflow: "hidden",
        ...Platform.select({
            ios: {
                borderColor: '#E6EBEF',
            },
            android: {
                backgroundColor: "#fff",
                elevation: 0.6,
                borderColor: "#0000",
            },
        })
    }
})
