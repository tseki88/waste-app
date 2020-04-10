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
        justifyContent: "space-between"
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 18,
    }
})

export default globalStyles;
