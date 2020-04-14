import React from 'react'
import { Text } from 'react-native'
import globalStyles from '../styles/globalStyles'

const AppText = ({children, style}) => {
    return (
        <Text style={[globalStyles.fontBase, style]}>
            {children}
        </Text>

    )
}

export default AppText