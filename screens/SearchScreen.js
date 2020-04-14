import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Section from '../shared/Section'
import globalStyles from '../styles/globalStyles'


const SearchScreen = ({navigation}) => {
    
    return (
        <View style={globalStyles.container}>
            <Section title={null} list={true}>
                {/* {queryDisplay.map()} */}
            </Section>
        </View>
    )
}

export default SearchScreen