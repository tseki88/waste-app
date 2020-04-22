import React from 'react'
import { Text } from 'react-native'
import globalStyles from '../styles/globalStyles'

const AppText = ({children, style, onPress = null}) => {
    return (
        <Text style={[globalStyles.fontBase, style]} onPress={onPress} >
            {children}
        </Text>

    )
}

export default AppText