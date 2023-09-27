import { View, StyleSheet } from "react-native";

export default props => {
    return <View style={styles.container}>
        <View style={[styles.flagpole, props.big ? styles.flagpoleBig: null]}/>
        <View style={[styles.flag, props.big ? styles.flagBig: null]}/>
        <View style={[styles.base1, props.big ? styles.base1Big: null]}/>
        <View style={[styles.base2, props.big ? styles.base2Big: null]}/>
    </View>
}
const styles = StyleSheet.create({
    container:{
        marginTop:2
    },
    flagpole:{
        position:'absolute',
        height:14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag:{
        position:'absolute',
        height:5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3
    },
    base1:{
        position:'absolute',
        height:2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10        
    },
    base2:{
        position:'absolute',
        height:2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12  
    },
    flagpoleBig:{
        position:'absolute',
        height:28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 15
    },
    flagBig:{
        position:'absolute',
        height:10,
        width: 12,
        backgroundColor: '#f22',
        marginLeft: 3
    },
    base1Big:{
        position:'absolute',
        height:4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 11,
        marginTop: 20        
    },
    base2Big:{
        position:'absolute',
        height:4,
        width: 18,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24  
    }
})