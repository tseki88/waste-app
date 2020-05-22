import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import { UpdateMunicipalityContext, UserMunicipalityContext } from '../context/globalContext'
import globalStyles from '../styles/globalStyles'

const LocationSelector = () => {

    const nearest = [
        { location: "City of Toronto", key: "1" },
        { location: "York Region", key: "2" },
    ]

    const userMunicipality = useContext(UserMunicipalityContext)
    const setUserMunicipality = useContext(UpdateMunicipalityContext)
    
    return (
        <ScrollView horizontal={true} style={styles.sideScroll} showsHorizontalScrollIndicator={false}>
            {/* Maybe Radio? or just a setState a single location which gets a focus style */}
            <AppText style={styles.location}>Location:</AppText>
            {nearest.map((item, i) => {
                return (
                    <TouchableOpacity
                        key={i} 
                        style={[
                            styles.each, 
                            userMunicipality === item.location 
                                ? 
                                [globalStyles.backgroundTwo, {borderColor:"#0000"}]
                                : 
                                null
                        ]} 
                        onPress={() => setUserMunicipality(item.location)}
                    >
                        <AppText 
                            key={i}
                            style={userMunicipality === item.location ? globalStyles.fontWhite : globalStyles.fontBlue} 
                        >{item.location}</AppText>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}


export default LocationSelector

const styles = StyleSheet.create({
    location: {
        marginRight: 8,
        paddingVertical: 4
    },    
    each: {
        marginRight: 6,
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 4,
        borderColor: "#E6EBEF",
        borderWidth: 1,
    },
    sideScroll: {
        marginBottom: 8,
        paddingVertical: 16,
        overflow: "visible"
    },
})
