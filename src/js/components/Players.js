// @flow

import React from "react"
import PropTypes from "prop-types"

const NumberOfPlayers = ({
  twoPlayerMode,
  onClick
}: {
  twoPlayerMode: boolean,
  onClick: () => void
}) => {
  return (
    <p onClick={onClick}
      style={playersStyle}
    >
      Mode:
      {twoPlayerMode
        ? <a href="#"> Player vs Player</a>
        : <a href="#"> Player vs Computer</a>}
    </p>
  )
}

let playersStyle = {
  textAlign: "center",
  marginBottom: "10px",
  fontFamily: "palatino",
  fontSize: "2.3rem",
  textShadow: "0 2px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.16)"
}

NumberOfPlayers.propTypes = {
  twoPlayerMode: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NumberOfPlayers
