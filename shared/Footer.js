import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.section}>
                <View style={[styles.innerSection, styles.innerSectionFocused]}>
                    <AntDesign name="search1" size={22} color={"#4f87ef"} />
                    <Text style={[styles.label, {color: "#4f87ef", fontWeight: "bold"}]}>Search</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <View style={styles.innerSection}>
                    <Feather name="package" size={22} />
                    <Text style={styles.label}>Drop off</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <View style={styles.innerSection}>
                    <AntDesign name="calendar" size={22} />
                    <Text style={styles.label}>Schedule</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
                <View style={styles.innerSection}>
                    <AntDesign name="setting" size={22} />
                    <Text style={styles.label}>Settings</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 60,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
    },
    innerSection: {
        height: "100%",
        borderTopColor: "lightgrey",
        borderTopWidth: 3, 
        paddingTop: 5,
        alignItems: 'center',
    },
    innerSectionFocused: {
        borderTopColor: "#4f87ef",
    },
    label: {
        fontSize: 12,
        marginTop: 6,
    }
})
