import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import AppText from './AppText'


const ListItem = ({item, pressHandler, history = null, depot = null}) => {
    
    let renderIcon;
    
    if (history) {
        renderIcon = <MaterialCommunityIcons name="history" size={22} color="#50575D" />
    } else if (depot){
        renderIcon = <Feather name="map-pin" size={16} color="#50575D" />
    }

    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <View style={styles.listItem}>
                {renderIcon}
                <View style={{flex: 1}}>
                    {
                        depot
                        ?
                        <View style={{flex: 1, marginHorizontal: 15}}>
                            <AppText style={styles.label}>{item.name}</AppText>
                            <AppText style={{fontSize: 12, color: "#50575D"}}>{item.addressSimple}</AppText>
                        </View>
                        :
                            history
                            ?
                            <View style={{flex: 1, marginHorizontal: 15, marginVertical: 2}}>
                                <AppText style={styles.label}>{item.name}</AppText>
                            </View>
                            :
                            <View style={{flex: 1, marginVertical: 2}}>
                                <AppText style={styles.label}>{item.name}</AppText>
                            </View>
                    }
                </View>
                <AntDesign name="right" size={18} color="#50575D" /> 
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
        paddingVertical: 15,
        width: "100%"
    },
    bold: {
        fontWeight: "bold",
    },
    // label: {
    //     width: "100%",
    // }
})
