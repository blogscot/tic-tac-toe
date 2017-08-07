import React from 'react'

import PropTypes from 'prop-types'

export default function Square(props) {
  return (
    <div 
      style={squareStyle}
      onClick={() => props.onClick()}>
      {props.currentPlayer}
    </div>
  )
}

Square.propTypes = {
  currentPlayer: PropTypes.string,
  onClick: PropTypes.func
}

let squareStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'Gold',
  width: '100px',
  height: '100px',
  border: '1px solid black',
  fontSize: '68px'
}