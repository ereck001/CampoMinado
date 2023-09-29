
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import toCreateBoard, {
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/engine'
import Header from './src/components/Header'
import LevelSelect from './src/screens/LevelSelect'
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
      lost: false,
      showlevelSelect: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lose = hadExplosion(board)
    const won = wonGame(board)

    if (lose) {
      showMines(board)
      Alert.alert('Perdeu!!')
    }

    if (won)
      Alert.alert('Parabéns', 'Você Venceu!')

    this.setState({ board, lose, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)

    const won = wonGame(board)
    if (won)
      Alert.alert('Parabéns', 'Você Venceu!')

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return <>
      <View style={styles.container}>
        <LevelSelect isVisible={this.state.showlevelSelect}
              onLevelSelected={this.onLevelSelected}
              onCancel={() => this.setState({showlevelSelect: false})}/>
        <View style={styles.header}>          
          <Header flagsLeft={
            this.minesAmound() - flagsUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())}
            onFlagPress={() => this.setState({showlevelSelect: true})}/>
        </View>
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
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
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    flexWrap: 'wrap'
  },
  header: {    
    flex: 3,
    alignItems: 'center',
    paddingTop:20
    //justifyContent: 'center'
  }
});
