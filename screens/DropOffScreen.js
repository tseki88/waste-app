import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Clipboard, FlatList } from 'react-native'
// import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'
import { depotData } from '../sampleData'
import AppText from '../shared/AppText'
import ListItem from '../shared/ListItem'
import { MunicipalityContext, DataContext } from '../App'

const DropOffScreen = ({navigation}) => {

    const [nearest, setNearest] = useState([
        { location: "City of Toronto", key: "1" },
        { location: "York Region", key: "2" },
    ])

    const [municipalityData, setMunicipalityData] = useState([])
    const data = useContext(DataContext)

    useEffect(() => {
        setMunicipalityData(data.depots)
    })

    const setUserMunicipality = useContext(MunicipalityContext)

    const pressHandler = (item) => {
        navigation.navigate("LocationDetails", item={item})
    }

    const sortDepot = municipalityData;
    sortDepot.sort((a,b) => {
        return b.name > a.name ? -1 : 1
    })

    const getHeader = () => {
        return (
            <View style={globalStyles.container}>
                <ScrollView horizontal={true} style={[styles.sideScroll, globalStyles.wrapper]} showsHorizontalScrollIndicator={false}>
                    {/* Maybe Radio? or just a setState a single location which gets a focus style */}
                    <AppText style={styles.location}>Location:</AppText>
                    {nearest.map((item, i) => {
                        return (
                            <TouchableOpacity key={i} style={styles.each} onPress={() => setUserMunicipality(item.location)}>
                                <AppText key={i}>{item.location}</AppText>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
    
    return (
        // <ScrollView style={globalStyles.container}>
        //     <ScrollView horizontal={true} style={[styles.sideScroll, globalStyles.wrapper]} showsHorizontalScrollIndicator={false}>
        //         {/* Maybe Radio? or just a setState a single location which gets a focus style */}
        //         <AppText style={styles.location}>Location:</AppText>
        //         {nearest.map((item, i) => {
        //             return (
        //                 <View key={i} style={styles.each}>
        //                     <AppText key={i}>{item.location}</AppText>
        //                 </View>
        //             )
        //         })}
        //     </ScrollView>
            <FlatList
                data={sortDepot}
                renderItem={({item}) => {                            
                    return (
                        <View style={globalStyles.wrapper}>
                            <ListItem item={item} depot={true} pressHandler={() => pressHandler(item)}/>
                        </View>
                    )
                }}
                ListHeaderComponent={getHeader}
            />
        // {/* </ScrollView> */}
    )
}

export default DropOffScreen

const styles = StyleSheet.create({
    sideScroll: {
        // paddingBottom: 30,
        marginVertical: 30,
        overflow: "visible"
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
    }
})