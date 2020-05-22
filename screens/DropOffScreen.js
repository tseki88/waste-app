import React, { useState, useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import globalStyles from '../styles/globalStyles'
import ListItem from '../shared/ListItem'
import { DataContext } from '../context/globalContext'

const DropOffScreen = ({navigation}) => {

    const data = useContext(DataContext)
    const [municipalityData, setMunicipalityData] = useState([])

    useEffect(() => {
        setMunicipalityData(data.depots)
    },[data])

    console.log("depot refresh")

    const pressHandler = (item) => {
        navigation.navigate("LocationDetails", item={item})
    }

    const sortDepot = municipalityData;
    sortDepot.sort((a,b) => {
        return b.name > a.name ? -1 : 1
    })
    
    return (
        <FlatList
            data={sortDepot}
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