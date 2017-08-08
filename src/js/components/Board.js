import React from 'react'

import Square from './Square'
import Status from './Status'
import Players from './Players'
import GameAI from '../services/ai'
import { 
  findWinner, 
  movesLeft,
  nextPlayer,
  updateGameStatus } from './pure-functions'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      singlePlayerMode: true,
      currentPlayer: 'O'
    }
  }
  playerTurn(index) {
    // React relies on immutable updates, so make a copy
    const squares = this.state.squares.slice()
    const singlePlayerMode = this.state.singlePlayerMode

    if (squares[index] || findWinner(squares)) { return }

    let currentPlayer = singlePlayerMode 
      ? nextPlayer(this.state.currentPlayer)
      : 'X'
    
    squares[index] = currentPlayer
    this.setState({ squares, currentPlayer })

    // In two player mode human player gets to go first
    if (!singlePlayerMode) {
      let delay = Math.floor(Math.random() * 1000) + 300
      const computerTurn = (squares, currentPlayer) => {
        let {bestMove} = new GameAI(squares, 'X')
        squares[bestMove] = 'O'
        this.setState({squares, currentPlayer})
      }
      // Fake some cognition
      setTimeout(computerTurn, delay, squares, currentPlayer)
    }
  }
  toggleSinglePlayerMode() {
    this.setState({
      singlePlayerMode: !this.state.singlePlayerMode
    })
  }
  renderSquare(index) {
    return ( 
      <Square
        onClick={() => this.playerTurn(index)}
        contents={this.state.squares[index]}
      />
    )
  }
  resetGame() {
    this.setState({ 
      squares: Array(9).fill(null),
      currentPlayer: 'O'
    })
  }
  render() {
    let status = updateGameStatus(this.state.squares, this.state.currentPlayer)
    return (
      <div>
        <Players 
          onClick={this.toggleSinglePlayerMode.bind(this)}
          singlePlayerMode={this.state.singlePlayerMode}
        />
        <div>
          <div style={rowStyle}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div style={rowStyle}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div style={rowStyle}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <Status 
          status={status} 
          onClick={() => this.resetGame()}/>
      </div>
    )
  }
}

let rowStyle = {
  display: 'flex',
  justifyContent: 'center'
}
