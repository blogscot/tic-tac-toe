import React from 'react';

import Board from './Board';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{'textAlign': 'center'}}>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }
}
