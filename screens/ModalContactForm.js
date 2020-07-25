import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/globalStyles'
import AppText from '../shared/AppText'

const ModalContactForm = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            presentationStyle="overFullScreen"
        >
            <View style={{flex: 1, display: "flex", flexDirection: "column"}}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <AppText style={[globalStyles.fontBlue, {textAlign: "center", fontSize: 17, lineHeight: 26}]}>Cancel</AppText>
                        </TouchableOpacity>
                        <View style={styles.wrapper}>
                            <AppText style={globalStyles.headerTwo}>Modal for Form</AppText>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalContactForm

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#00000040",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
    },
    wrapper: {
        marginHorizontal: 14
    },
    modal: {
        backgroundColor: "#FFFFFF",
        marginTop: 50,
        flexGrow: 1,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    cancelButton: {
        height: 30,
        marginTop: 14,
        marginBottom: 10,
        marginLeft: 2,
        // borderWidth: 1,
        width: 80
    }
})
