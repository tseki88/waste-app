import { StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    headerOne: {
        fontSize: 24,
        fontFamily: "SongMyung",
        lineHeight: 28,
        width: 265
    },
    headerTwo: {
        fontSize: 20,
        fontFamily: "SongMyung",
        lineHeight: 26
    },
    fontBase: {
        fontSize: 14,
        fontFamily: "WorkSans",
        lineHeight: 22
    },
    fontSmall: {
        fontSize: 12,
        fontFamily: "WorkSans"
    },
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: "#FFFFFF"
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 14,
    },

    backgroundOne: {
        backgroundColor: "#FFFFFF"
    },    
    backgroundTwo: {
        backgroundColor: "#0945DE"
    },
    backgroundThree: {
        backgroundColor: "#FFD027"
    },
    backgroundFour: {
        backgroundColor: "#E6EBEF"
    },
    backgroundFive: {
        backgroundColor: "#F3F6FB"
    },

    fontBlackPrimary: {
        color: "#1B1E22"
    },
    fontBlackSecondary: {
        color: "#282E34"
    },
    fontWhite: {
        color: "#FFFFFF"
    },
    fontGrey: {
        color: "#6E6E6E"
    },
    fontBlue: {
        color: "#0945DE"
    },
})

export default globalStyles;
