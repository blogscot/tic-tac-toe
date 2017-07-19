import React from "react"
import '../../css/Board.css'

import Square from "./Square"
import Status from "./Status"
import { findWinner, movesLeft } from './pure-functions'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = { 
      squares: Array(9).fill(null),
      value: 'O'
     }
  }

  handleClick(index) {
      const squares = this.state.squares.slice()
      const value = this.state.value === 'X' ? 'O' : 'X'
      if (squares[index] !== null) { return }
      squares[index] = value

      this.setState({ 
        squares: squares,
        value: value,
      })
  }

  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]} 
        onClick={() => this.handleClick(index)}
      />
    )
  }

  updateGameStatus() {
    const squares = this.state.squares
    const winner = findWinner(squares)
    let status
    if (winner) {
      status = 'Winner : ' + winner
    } else if (movesLeft(squares)){
      status = 'Next player: ' + (this.state.value == 'O' ? 'X' : 'O')
    } else {
      status = 'Game is drawn'
    }
    return status
  }

  resetGame() {
    this.setState({ 
      squares: Array(9).fill(null),
      value: 'O'
     })
  }

  render() {
    let status = this.updateGameStatus()
    return (
      <div>
      <div class={"board"}>
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