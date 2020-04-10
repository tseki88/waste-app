import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'

const Tag = () => {
    return (
        <View style={styles.tag}>
            <View style={styles.icon}>
                <Feather name="package" size={20} color="white" />
            </View>
                <Text style={styles.labelText}>Drop Off Center</Text>
        </View>
    )
}

export default Tag

const styles = StyleSheet.create({
    tag: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
        backgroundColor: "grey",
        borderRadius: 25,
        position: "relative",
        height: 32
    },
    icon: {
        backgroundColor: "grey",
        borderRadius: 50,
        borderColor:"#fff",
        borderWidth: 2,
        padding: 5,
        position: "absolute"
    },
    labelText: {
        marginLeft: 40,
        marginRight: 14,
        textTransform: "uppercase",
        letterSpacing: 0.4
    }

})
