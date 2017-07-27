import React from 'react'
import '../../css/Square.css'

import PropTypes from 'prop-types'

export default function Square(props) {
  return (
    <div 
      class={'active'}
      onClick={() => props.onClick()}>
      {props.currentPlayer}
    </div>
  )
}

Square.propTypes = {
  currentPlayer: PropTypes.string,
  onClick: PropTypes.func
}