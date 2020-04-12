import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import globalStyles from '../styles/globalStyles'
import Search from './Search'
import { ScrollView } from 'react-native-gesture-handler'
import Section from './Section'
import AppText from './AppText'

const Header = ({title, nagivation}) => {
    const [nearest, setNearest] = useState([
        {location:"Markham", key : "1"},
        {location:"Mississauga", key : "2"},
        {location:"Richmond Hill", key : "3"},
        {location:"Vaughan", key : "4"},
        {location:"North York", key : "5"},
    ])

    return (
        <View style={styles.header}>
            <Text style={globalStyles.headerOne}>{title}</Text>
            <Search />
            <ScrollView horizontal={true} style={styles.sideScroll} showsHorizontalScrollIndicator={false}>
                {/* Maybe Radio? or just a setState a single location which gets a focus style */}
                <AppText style={styles.location}>Location:</AppText>
                {nearest.map((item) => {
                    return (
                        <View key={item.key} style={styles.each}>
                            <AppText>{item.location}</AppText>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width - 32,
        elevation: 1,
        paddingTop: 5,
    },
    sideScroll: {
        paddingBottom: 8,
        marginVertical: 2,
    },
    location: {
        marginRight: 8,
        paddingVertical: 4
    },
    each: {
        marginRight: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: "#E6EBEF",
        borderWidth: 1,
    },
})
