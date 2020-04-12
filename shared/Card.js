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
        borderWidth: 0.3,
        borderColor: "#004EE7",
        // opacity: 0.7,
        shadowColor: "#004EE7",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // elevation: 1,
        width: 291,
        marginRight: 8,
        paddingVertical: 10,
        paddingLeft: 16,
        // marginBottom: 10
    }
})
