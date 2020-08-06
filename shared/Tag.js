import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Feather, SimpleLineIcons, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
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
        case "Drop Off Depot":
            renderTag = <Feather name="package" size={20} color="black" />
            break;
        case "Blue Box":
            renderTag = <FontAwesome5 name="recycle" size={20} color="white" />
            break;
        case "Blue Bin":
            renderTag = <FontAwesome5 name="recycle" size={20} color="white" />
            break;
        case "York Region Waste Facility":
            renderTag = <FontAwesome5 name="building" size={20} color="black" />
            break;
        case "Reuse Donation Centre":
            renderTag = <Feather name="users" size={20} color="black" />
            break;
        case "Green Bin":
            renderTag = <MaterialCommunityIcons name="food-apple" size={20} color="white" />
            break;
        case "Yard Waste":
            renderTag = <MaterialCommunityIcons name="leaf" size={20} color="black" />
            break;
        case "Back Yard Composter":
            renderTag = <MaterialCommunityIcons name="leaf" size={20} color="black" />
            break;
        case "Household Hazardous Waste":
            renderTag = <Ionicons name="ios-flame" size={20} color="black" />
            break;
        case "Electronics":
            renderTag = <MaterialCommunityIcons name="battery-10" size={20} color="black" />
            break;
        case "Metal":
            renderTag = <SimpleLineIcons name="wrench" size={20} color="black" />
            break;
        case "Oversized Item":
            renderTag = <MaterialCommunityIcons name="sofa" size={20} color="white" />
            break;
        default:
            break;
    }


    return (
        type === "Not Accepted" 
        ?
        null
        :
        <View style={[styles.tag, tagStyles[type]]}>
            <View style={[styles.icon, tagStyles[type]]}>
                {renderTag}
            </View>
            <AppText style={[styles.labelText, textStyles[type]]}>
                {type === "Drop Off Depot"
                    ?
                "Drop-Off Depot"
                    :
                    type === "Community Drop off"
                        ?
                    "Community Drop-Off"
                        :
                    type
                }
            </AppText>
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
    "Blue Bin": {
        backgroundColor: "blue"
    },
    "York Region Waste Facility": {
        backgroundColor: "#E6EBEF",
    },
    "Drop Off Depot": {
        backgroundColor: "#E6EBEF",
    },
    "Reuse Donation Centre": {
        backgroundColor: "cornflowerblue"
    },
    "Green Bin": {
        backgroundColor: "darkgreen"
    },
    "Yard Waste": {
        backgroundColor: "peru"
    },
    "Back Yard Composter": {
        backgroundColor: "peru"
    },
    "Household Hazardous Waste": {
        backgroundColor: "#E65100"
    },
    "Electronics": {
        backgroundColor: "#F3F6FB"
    },
    "Metal": {
        backgroundColor: "#E6EBEF"
    },
    "Oversized Item": {
        backgroundColor: "#6E6E6E"
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
    "Blue Bin": {
        color: "white"
    },
    "York Region Waste Facility": {
        color: "black"
    },
    "Drop Off Depot": {
        color: "black"
    },
    "Reuse Donation Centre": {
        color: "black"
    },
    "Green Bin": {
        color: "white"
    },
    "Yard Waste": {
        color: "black"
    },
    "Back Yard Composter": {
        color: "black"
    },
    "Household Hazardous Waste": {
        color: "black"
    },
    "Electronics": {
        color: "black"
    },
    "Metal": {
        color: "black"
    },
    "Oversized Item": {
        color: "white"
    }
})