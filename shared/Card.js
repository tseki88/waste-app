import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        borderColor: "grey",
        borderWidth: 0.2,
        marginVertical: 4,
        width: 350,
        marginRight: 8,
        padding: 6,
    }
})
