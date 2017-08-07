import React from 'react'

const NumberOfPlayers = () => {
  return (
    <p style={playersStyle}>
      <a href="#">Single Player</a>
      {' '}
      <a href="#">Two Player</a>
    </p>
  )
}

let playersStyle = {
  width: '10%',
  margin: 'auto',
  fontSize: '16px'
}

export default NumberOfPlayers
