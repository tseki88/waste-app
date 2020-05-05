import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppText from './AppText'


const SearchList = ({item, pressHandler, query = "", matchCount, index}) => {
    
    let boldMatch
    let noMatchBefore
    let noMatchAfter

    if (index < matchCount) {
        if (query !== ""){
            query = query.toLowerCase()
            let letterCount = query.length
            let name = item.name.toLowerCase()
            let ind = name.indexOf(query)

            noMatchBefore = name.slice(0, ind)
            boldMatch = name.slice(ind,(ind + letterCount))
            noMatchAfter = name.slice((ind + letterCount),name.length)
        }
    } else {
        noMatchBefore = item.name.toLowerCase()
    }
    

    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <View style={styles.listItem}>
                {
                query !== ""
                ?
                <AppText>
                    {noMatchBefore}
                    <AppText style={styles.bold}>{boldMatch}</AppText>
                    {noMatchAfter}
                </AppText>
                :
                <AppText style={styles.label}>{item.name}</AppText>
                
                }
                <AntDesign name="right" size={18} color="#50575D" /> 
            </View>
        </TouchableOpacity>
    )
}

export default SearchList

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "#E6EBEF",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
        width: "100%"
    },
    bold: {
        fontWeight: "bold",
    },
    label: {
        width: "80%",
    }
})
