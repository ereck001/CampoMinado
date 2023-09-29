
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import toCreateBoard,{
  cloneBoard, 
  openField, 
  hadExplosion, 
  wonGame, 
  showMines
} from './src/engine'
import { Component } from 'react'



export default class App extends Component {
  constructor(props) {
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
      board: toCreateBoard(rows, columns, this.minesAmound()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lose = hadExplosion(board)
    const won = wonGame(board)

    if (lose){
      showMines(board)
      Alert.alert('Perdeu!!')
    }

    if (won) 
      Alert.alert('Parabéns', 'Você Venceu!')
    
    this.setState({board, lose, won})
  }

  render() {
    return <>      
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, }} >Campo Minado</Text>
        </View>
        <View style={styles.board}>
          <MineField board={this.state.board} 
          onOpenField={this.onOpenField}/>
        </View>
      </View>
    </>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  board: {
    flex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    flexWrap: 'wrap'
  },
  header: {
    flexDirection: 'column',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
