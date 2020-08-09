import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import AppText from './AppText'
import LocationSelector from './LocationSelector'
import globalStyles from '../styles/globalStyles'

const MainHeader = ({navigation}) => {
    return (
        <View style={styles.header}>
            <Text style={globalStyles.headerOne}>What do you want to throw out?</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")} style={{height: 42}}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <AppText style={styles.input}>Search for an item</AppText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <LocationSelector />
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        marginLeft: -16,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 10,
    },
    inputContainer: {
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    inputWrapper: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        height: 42,
        borderRadius: 4,
        borderWidth: 1,
        ...Platform.select({
            ios: {
                marginTop: 0,
                borderColor: '#E6EBEF',
            },
            android: {
                marginTop: 20,
                backgroundColor: "#fff",
                elevation: 0.6,
                borderColor: "#0000",
            },
        })
    },
    input: {
        color: "grey",
        marginLeft: 12,
    },
})
