import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'


const ListItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <View style={styles.listItem}>
                <AppText>{item.name}</AppText>
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
})
