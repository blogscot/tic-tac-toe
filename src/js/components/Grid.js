import React from "react";

import Col from "./Col";

export default class Grid extends React.Component {
  render() {
    const style={"display": "inline-flex"}
    const centreStyle={
      "width": "31%",
      "margin": "auto"
    }
    return (
      <div style={centreStyle}>
        <div style={style}>
          <Col col={1}/></div>
        <div style={style}>
          <Col col={2}/></div>
        <div style={style}>
          <Col col={3}/></div>
      </div>
    )
  }
}