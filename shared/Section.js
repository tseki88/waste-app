import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const Section = ({title, flex, children, list, plusSize = false}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
        
    if (plusSize === true) {
        return (
            <View style={[title === null ? null : styles.sectionPlus ,{flex: flex ? flex : 1}]}>
                {title === null
                    ?
                    null
                    :
                    <Text style={[
                        globalStyles.headerOne, 
                        globalStyles.fontBlackPrimary, 
                        {marginBottom: list ? 0 : 10, width: 320}
                    ]}>
                        {capitalize(title)}
                    </Text>
                }
                {children}
            </View>
        )
    } else {
        return (
            <View style={[title === null ? null : styles.section ,{flex: flex ? flex : 1}]}>
                {title === null
                    ?
                    null
                    :
                    <Text style={[
                        globalStyles.headerTwo, 
                        globalStyles.fontBlackPrimary, 
                        {marginBottom: list ? 0 : 10, width: 320}
                    ]}>
                        {capitalize(title)}
                    </Text>
                }
                {children}
            </View>
        )
    }
}

export default Section

const styles = StyleSheet.create({
    section: {
        marginVertical: 10,
        paddingBottom: 5
    },
    sectionPlus: {
        marginVertical: 10,
        paddingBottom: 15
    }
})