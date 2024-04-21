import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inter:{
        fontFamily: 'Inter-SemiBold'
    },
    interreg:{
        fontFamily: 'Inter-Regular'
    },
    interExtraBold:{
        fontFamily: 'Inter-ExtraBold'
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    titleContainer:{
        marginTop: 30,
        marginBottom: 20
    },
    title: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 40,
        marginBottom: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: '#413C3CCC'
    },
    normaltext:{
        fontFamily: 'Inter-Regular',
        color: '#2E2C33',
        fontSize: 16
    },
    inputContainer: {
        marginTop: 30,
    },
    inputText: {
        marginBottom: 8,
        fontSize: 12,
    },
    checkboxContainer:{ 
        flexDirection: 'row',
    },
    checkbox:{
        marginRight: 8,
        borderRadius: 6,
        width: 26,
        height: 26
    },
    checkboxText:{
        fontFamily: 'Inter-ExtraBold', 
        fontSize: 12, 
        alignSelf: 'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button:{
        height: 54,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        fontSize: 16
    },
    blkButton: {
        backgroundColor: '#232325',
    },
    whtButton:{
        backgroundColor: '#fff',
        borderColor: '#232325',
        borderWidth: 1
    },
    pbutton: {
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 12,
        marginTop: 30
    },
    success:{
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    successtext:{
        alignItems: 'center',
        fontSize: 20
    },
});