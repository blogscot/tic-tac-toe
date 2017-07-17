import React from "react";
import '../../css/Square.css'

export default class Square extends React.Component {
  render() {
    return (
        <div 
          className={"active"}
          onClick={() => this.props.onClick() }>
          {this.props.value}
        </div>
    )
  }
}