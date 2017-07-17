import React from "react";
import '../../css/Board.css'

import Square from "./Square";

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = { 
      squares: Array(9).fill(null),
     }
  }

  handleClick(index) {
      const squares = this.state.squares.slice()
      squares[index] = 'X'
      this.setState({ squares: squares })
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
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}