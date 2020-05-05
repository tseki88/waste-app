import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from './AppText'

const AccordionList = ({acceptedItem, open=false, accordionHandler}) => {
    

    // const [open, setOpen] = useState(false)

    const height = open ? "auto" : 0;

    const {category, subcategory} = acceptedItem
    // console.log(category)

    return (
        <View>
            <View style={styles.listContainer}>
                <TouchableOpacity onPress={accordionHandler}>
                    <View style={[styles.listItem, {marginBottom: open ? 10 : 17}]}>
                        <AppText style={styles.label}>{category}</AppText>
                        {
                            open
                            ?
                            <AntDesign name="minus" size={22} color="#50575D" /> 
                            :
                            <AntDesign name="plus" size={22} color="#50575D" /> 
                        }
                    </View>
                </TouchableOpacity>
                <View style={[styles.nestedList, {height: height}, {marginBottom: open ? 17 : 0}]}>
                    { 
                    subcategory.map((each, i) => (
                        <View key={i} style={{flexDirection: "row"}}>
                            <AppText style={{marginRight: 8 }}>{'\u2022'}</AppText>
                            <AppText>{each}</AppText>
                        </View>
                    ))
                    }
                </View>
            </View>
        </View>
    )
}

export default AccordionList

const styles = StyleSheet.create({
    listContainer: {
        borderBottomColor: "#E6EBEF",
        borderBottomWidth: 1,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 17,
    },
    nestedList: {
        overflow: "hidden",
        marginLeft: 16
    }
    ,
    label: {
        width: "80%",
    }
})
