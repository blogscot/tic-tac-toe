import React from "react";
import '../../css/Grid.css'

import Col from "./Col";

export default class Grid extends React.Component {
  constructor() {
    super()
    class square {
      constructor(row, col) {
      this.position = {row, col}
      this.active = false
      this.value = "blank"
      }
    }
    let grid = [
      [new square(0,0), new square(0,1), new square(0,2)],
      [new square(1,0), new square(1,1), new square(1,2)],
      [new square(2,0), new square(2,1), new square(2,2)],
    ]
    this.state = { grid }
  }
  render() {
    return (
      <div className={"centre"}>
        <div className={"inline"}>
          <Col col={1}/></div>
        <div className={"inline"}>
          <Col col={2}/></div>
        <div className={"inline"}>
          <Col col={3}/></div>
      </div>
    )
  }
}