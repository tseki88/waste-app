import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'


const ListItem = ({item, pressHandler, query = ""}) => {
    
    let letterCount = query.length

    let name = item.name
    let boldMatch = name.slice(0,letterCount)
    let noMatch = name.slice(letterCount,name.length)
    

    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <View style={styles.listItem}>
                <AppText>
                    <AppText style={styles.bold}>{boldMatch}</AppText>
                    {noMatch}
                </AppText>
                <AntDesign name="right" size={22} color="#50575D" /> 
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "#E6EBEF",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
    },
    bold: {
        fontWeight: "bold",
    }
})
