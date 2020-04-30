import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Feather, SimpleLineIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from './AppText'

const Tag = ({type}) => {

    let renderTag

    switch (type) {
        case "Garbage":
            renderTag = <SimpleLineIcons name="trash" size={20} color="white" />
            break;
        case "Community Drop off":
            renderTag = <Feather name="package" size={20} color="black" />
            break;
        case "Blue Box":
            renderTag = <FontAwesome name="recycle" size={20} color="white" />
            break;
        case "York Region Waste Facility":
            renderTag = <MaterialCommunityIcons name="factory" size={20} color="white" />
            break;
        case "Reuse Donation Centre":
            renderTag = <Feather name="users" size={20} color="black" />
            break;
        case "Green Bin":
            renderTag = <MaterialCommunityIcons name="food-apple" size={20} color="white" />
            break;
        case "Yard Waste":
            renderTag = <MaterialCommunityIcons name="leaf" size={20} color="black" />
        default:
            break;
    }


    return (
        <View style={[styles.tag, tagStyles[type]]}>
            <View style={[styles.icon, tagStyles[type]]}>
                {renderTag}
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
        borderRadius: 25,
        position: "relative",
        height: 32
    },
    icon: {
        borderRadius: 50,
        borderColor:"#fff",
        borderWidth: 2,
        padding: 5,
        position: "absolute",
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center"
    },
    labelText: {
        marginLeft: 48,
        marginRight: 18,
        textTransform: "uppercase",
        
    }
})

const tagStyles = StyleSheet.create({
    "Garbage": {
        backgroundColor: "#6E6E6E",
    },
    "Community Drop off": {
        backgroundColor: "#FFD027",
    },
    "Blue Box": {
        backgroundColor: "blue",
    },
    "York Region Waste Facility": {
        backgroundColor: "lightcoral",
    },
    "Reuse Donation Centre": {
        backgroundColor: "cornflowerblue"
    },
    "Green Bin": {
        backgroundColor: "darkgreen"
    },
    "Yard Waste": {
        backgroundColor: "peru"
    }
})

const textStyles = StyleSheet.create({
    "Garbage": {
        color: "white"
    },
    "Community Drop off": {
        color: "black"
    },
    "Blue Box": {
        color: "white"
    },
    "York Region Waste Facility": {
        color: "white"
    },
    "Reuse Donation Centre": {
        color: "black"
    },
    "Green Bin": {
        color: "white"
    },
    "Yard Waste": {
        color: "black"
    }
})