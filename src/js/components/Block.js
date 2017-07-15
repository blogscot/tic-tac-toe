import React from "react";
import '../../css/Block.css'

export default class Block extends React.Component {
  componentWillMount() {
    const row = this.props.row
    const col = this.props.col
    const square = this.props.grid[row][col]
    this.state = {
      active: square.active
    }
  }
  handleEvent(e) {
    e.preventDefault()
    if (!this.state.active) {
      this.setState({
        active: true
      })
    }
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