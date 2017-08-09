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
  fontSize: "16px"
}

NumberOfPlayers.propTypes = {
  twoPlayerMode: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NumberOfPlayers
