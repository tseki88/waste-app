import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Search = () => {
    return (
        // When this is pressed, changes view
        <View>
            <TextInput placeholder="Search for an item" placeholderTextColor="grey" style={styles.input} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        height: 42,
        borderRadius: 4,
        borderWidth: 0.2,
        borderColor: 'grey',
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
    }
})
