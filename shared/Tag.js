import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AppText from './AppText'

const Tag = ({type}) => {
    return (
        <View style={[styles.tag, tagStyles[type]]}>
            <View style={[styles.icon, iconStyles[type]]}>
                <Feather name="package" size={20} color="white" />
            </View>
            <AppText style={[styles.labelText, textStyles[type]]}>{type}</AppText>
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
        position: "absolute",
        width: 36,
        height: 36
    },
    labelText: {
        marginLeft: 48,
        marginRight: 18,
        textTransform: "uppercase",
        
    }
})

const tagStyles = StyleSheet.create({
    garbage: {
        backgroundColor: "grey",
    },
    "drop off": {
        backgroundColor: "orange",
    },
    recycling: {
        backgroundColor: "blue",
    },
    compost: {
        backgroundColor: "green",
    },
})

const textStyles = StyleSheet.create({
    garbage: {
        color: "white"
    },
    "drop off": {
        color: "black"
    },
    recycling: {
        color: "white"
    },
    compost: {
        color: "white"
    },
})

const iconStyles = StyleSheet.create({
    garbage: {
        backgroundColor: "grey",
    },
    "drop off": {
        backgroundColor: "orange",
    },
    recycling: {
        backgroundColor: "blue",
    },
    compost: {
        backgroundColor: "green",
    },
})