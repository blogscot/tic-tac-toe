import React from 'react'
import '../../css/Board.css'

import Square from './Square'
import Status from './Status'
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
      currentPlayer: 'O',
      oMovesCount: 0,
    }
  }

  handleClick(index) {
    // React relies on immutable updates, so make a copy
    const squares = this.state.squares.slice()
    const currentPlayer = nextPlayer(this.state.currentPlayer)
    if (squares[index] || findWinner(squares)) { return }
    squares[index] = currentPlayer

    this.setState({ squares, currentPlayer })
  }

  renderSquare(index) {
    return ( 
      <Square
        currentPlayer={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
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
        <div>
          <div class="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div class="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div class="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <Status 
          class="status"
          status={status} 
          onClick={() => this.resetGame()}/>
      </div>
    )
  }
}