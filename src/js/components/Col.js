import React from "react";

import Block from "./Block";

export default class Col extends React.Component {
  render() {
    let { col } = this.props
    return (
      <div>
        <Block col={col} row={1} />
        <Block col={col} row={2} />
        <Block col={col} row={3} />
      </div>
    )
  }
}