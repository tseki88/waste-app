import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.section}>
                <View style={styles.innerSection}>
                    <AntDesign name="search1" size={22} />
                    <Text style={styles.label}>Search</Text>
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
        borderTopColor: "grey",
        borderTopWidth: 0.2,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,

    },
    section: {
        flex: 1,
        justifyContent: 'center',
    },
    innerSection: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 6,
    }
})
