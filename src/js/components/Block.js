import React from "react";

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
    const active={
      "background": "Gold",
      "width": "100px",
      "height": "100px",
      "margin": "0 2px",
      "border": "1px solid black",
      "display": "inline-block"
    }
    const inactive={
      "background": "Brown",
      "width": "100px",
      "height": "100px",
      "margin": "0 2px",
      "border": "1px solid black",
      "display": "inline-block"
    }    
    return (
      <div>
        <div 
        onClick={this.handleEvent.bind(this)} 
        style={this.state.active ? active : inactive }></div>
      </div>
    )
  }
}