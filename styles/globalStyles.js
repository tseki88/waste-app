import { StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    headerOne: {
        fontSize: 24,
    },
    headerTwo: {
        fontSize: 20,
    },
    fontBase: {
        fontSize: 14,
    },
    fontSmall: {
        fontSize: 12,
    },
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor:"#fff"
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 20,
    }
})

export default globalStyles;
