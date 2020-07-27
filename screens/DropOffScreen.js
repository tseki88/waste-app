import React, { useState, useContext, useEffect, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import { DataContext, UserMunicipalityContext, AppStateVisibleContext } from '../context/globalContext'
import { useFocusEffect } from '@react-navigation/native';

const DropOffScreen = ({navigation}) => {

    const data = useContext(DataContext)
    const userMunicipality = useContext(UserMunicipalityContext)
    // const appStateVisible = useContext(AppStateVisibleContext)
    const [municipalityData, setMunicipalityData] = useState([])
    const [sortedData, setSortedData] = useState([])

    // useFocusEffect(
    //     useCallback(() => {
    //         setMunicipalityData(data.municipality[userMunicipality].depots)
    // },[userMunicipality, data, appStateVisible]))


    useEffect(() => {
        setMunicipalityData(data.municipality[userMunicipality].depots)
    },[userMunicipality, data])

    console.log("depot refresh")

    const pressHandler = (item) => {
        navigation.navigate("LocationDetails", item={item})
    }

    // useFocusEffect(
    //     useCallback(() => {
    //         let sortDepot = municipalityData;
    //         sortDepot.sort((a,b) => {
    //             return b.name > a.name ? -1 : 1
    //         })
    //         setSortedData(sortDepot)
    // },[municipalityData, data, appStateVisible]))


    useEffect(() => {
        let sortDepot = municipalityData;
        sortDepot.sort((a,b) => {
            return b.name > a.name ? -1 : 1
        })
        setSortedData(sortDepot)
    },[municipalityData, data])
    
    return (
        <FlatList
            data={sortedData}
            renderItem={({item}) => {                            
                return (
                    <View style={globalStyles.wrapper}>
                        <ListItem item={item} depot={true} pressHandler={() => pressHandler(item)}/>
                    </View>
                )
            }}
        />
    )
}

export default DropOffScreen