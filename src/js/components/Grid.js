import React from "react";
import '../../css/Grid.css'

import Col from "./Col";

export default class Grid extends React.Component {
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