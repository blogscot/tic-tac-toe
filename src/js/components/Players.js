import React from 'react'
import PropTypes from 'prop-types'

const NumberOfPlayers = ({ singlePlayerMode, onClick }) => {
  return (
    <p
      onClick={onClick} 
      style={playersStyle}>
      Mode:
      { singlePlayerMode 
        ? <a href="#"> Single Player</a>
        : <a href="#"> Two Player</a> }
    </p>
  )
}

let playersStyle = {
  textAlign: 'center', 
  marginBottom: '10px',
  fontSize: '16px'
}

NumberOfPlayers.propTypes = {
  singlePlayerMode: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NumberOfPlayers
