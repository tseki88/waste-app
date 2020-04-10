import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { AntDesign, Feather } from '@expo/vector-icons'
import Footer from '../shared/Footer'
import Section from '../shared/Section'
import Card from '../shared/Card'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
    const [topSearch, setTopSearch] = useState([
        {text: "coffee cup", key: '1'},
        {text: "red plastic cup", key: '2'},
        {text: "aluminum foil", key: '3'},
        {text: "AA battery", key: '4'},
        // {text: "styrofoam", key: '5'},
    ])
    
    const pressHandler = () => {
        navigation.navigate("ItemDetails")
    }


    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.wrapper}>
                <Section title="Top Searches" flex={4}>
                    <FlatList
                        data={topSearch}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={pressHandler}>
                                <View style={styles.listItem}>
                                    <Text style={globalStyles.fontBase}>{item.text}</Text>
                                    <AntDesign name="right" size={22} color="#333" /> 
                                </View>
                            </TouchableOpacity>
                        )}
                        />
                </Section>
                <Section title="Recycling Blog" flex={3}>
                    <ScrollView horizontal={true} style={styles.sideScroll}>
                        <Card>
                            <Text style={styles.cardText}>Remember to rinse recycling matters before putting it in the <Text style={styles.highlight}>blue bin</Text></Text>
                        </Card>
                        <Card>
                            <Text style={styles.cardText}>Remember to rinse recycling matters before putting it in the <Text style={styles.highlight}>blue bin</Text></Text>
                        </Card>
                        <Card>
                            <Text style={styles.cardText}>Remember to rinse recycling matters before putting it in the</Text> 
                            <View style={styles.highlight}><Text>blue bin</Text></View>
                        </Card>
                    </ScrollView>
                </Section>
            </View>
            <Footer />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.2,
        paddingLeft: 4,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    cardText: {
        fontSize: 16,
        width: "50%",
        paddingVertical: 10,
        paddingHorizontal: 14,
        lineHeight: 22,
    },
    highlight: {
        backgroundColor: "#004de8",
        color: "#fff",
    },
    sideScroll: {
        paddingBottom: 6,
    }
})
