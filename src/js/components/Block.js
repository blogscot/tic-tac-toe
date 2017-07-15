import React from "react";
import './Block.css'

export default class Block extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }
  }
  handleEvent(e) {
    e.preventDefault()
    if (!this.state.active) {
      this.setState({
        active: true
      })
    }
    // console.log(`${this.props.row}, ${this.props.col}`)
  }
  render() {
    return (
      <div>
        <div 
        onClick={this.handleEvent.bind(this)} 
        className={this.state.active ? "active" : "inactive" }></div>
      </div>
    )
  }
}