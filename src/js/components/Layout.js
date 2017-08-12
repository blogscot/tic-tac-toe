// @flow

import React from "react"

import Board from "./Board"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1 style={layoutStyle}>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }
}

let layoutStyle = {
  fontFamily: "palatino",
  fontSize: "5rem",
  textAlign: "center",
  textShadow: "0 4px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.18)"
}
