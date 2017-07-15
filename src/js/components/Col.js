import React from "react";

import Block from "./Block";

export default class Col extends React.Component {
  render() {
    let { col } = this.props
    return (
      <div>
        <Block grid={this.props.grid} col={col} row={0} />
        <Block grid={this.props.grid} col={col} row={1} />
        <Block grid={this.props.grid} col={col} row={2} />
      </div>
    )
  }
}