import React from "react";
import '../../css/Board.css'

import Square from "./Square";

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

      if (this.findWinner(squares) || squares[index] !== null) { return }
      squares[index] = value

      if (this.findWinner(squares)) {
        console.log(`${value} wins!`)
      }

      this.setState({ 
        squares: squares,
        value: value,
      })
  }

  findWinner(squares) {
    const positions = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    const isWinner = char => 
      positions.map(line => 
        line.every(position => squares[position] === char))
      .reduce((prev, curr) => prev || curr)
      
    return isWinner('X') || isWinner('O')
  }

  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]} 
        onClick={() => this.handleClick(index)}
        />
    )
  }
  
  render() {
    return (
      <div className={"board"}>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}