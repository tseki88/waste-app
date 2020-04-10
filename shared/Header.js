import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import globalStyles from '../styles/globalStyles'
import Search from './Search'
import { ScrollView } from 'react-native-gesture-handler'
import Section from './Section'

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
            <Section title={title}>
                <Search />
                <ScrollView horizontal={true} style={styles.sideScroll} showsHorizontalScrollIndicator={false}>
                    {nearest.map((item) => {
                        return (
                            <View key={item.key} style={styles.each}>
                                <Text>{item.location}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </Section>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width - 32,
        elevation: 1,
        paddingBottom: 2,
    },
    sideScroll: {
        paddingBottom: 8,
        marginVertical: 2,
    },
    each: {
        marginRight: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: "skyblue",
        borderWidth: 0.3,
    }
})
