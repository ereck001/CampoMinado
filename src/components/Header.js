import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Flag from "./Flag"

export default props => <View styles={styles.container}>
    <View styles={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress}
            style={styles.flagButton}>
            <Flag style={{paddingTop: 10}} big />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}> = {props.flagsLeft} </Text>
    </View>
    <TouchableOpacity style={styles.button}
        onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
    </TouchableOpacity>
</View>

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#eee',
        alignItems: 'center',
        justifyContent:'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    flagButton:{
        marginTop: 10,
        minWidth: 30    
    }, 
    flagsLeft: {
        fontSize:30,
        fontWeight: 'bold',
        marginLeft: 20
    }, 
    button:{
        backgroundColor: '#999',
        padding: 5
    },    
    buttonLabel:{
        fontSize:20,
        color: '#000',
        fontWeight: 'bold'
    }    
})