
import { StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import toCreateBoard from './src/engine'
import { Component } from 'react'



export default class App extends Component {
  constructor(props){
    super(props)
      this.state = this.createState()
  }

  minesAmound = () => {
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
  
    return Math.ceil(columns * rows * params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const columns = params.getColumnsAmount()
    return {
      board: toCreateBoard(rows, columns, this.minesAmound())
    }
  }

  render(){
     return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:25,}} >Campo Minado</Text>
      </View>
      <View style={styles.board}>
        <MineField board = {this.state.board}/>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  board:{
    flex:11,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aaa',
    flexWrap:'wrap'
  },
  header:{    
    flexDirection:'column',
    flex: 2,
    alignItems:'center',
    justifyContent:'center'
  }
});
