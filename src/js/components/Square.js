import React from 'react'
import PropTypes from 'prop-types'

export default function Square({contents, onClick}) {
  return (
    <div 
      style={squareStyle}
      onClick={onClick}>
      {contents}
    </div>
  )
}

Square.propTypes = {
  contents: PropTypes.string,  // each square value is initially null
  onClick: PropTypes.func.isRequired
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