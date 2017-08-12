// @flow

import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

export default function Status({
  status,
  onClick
}: {
  status: string,
  onClick: () => void
}) {
  return (
    <div>
      <div style={nextPlayerStyle}>
        {status}
      </div>
      <div style={nextPlayerStyle}>
        <Button bsSize="large"
          bsStyle="primary"
          onClick={onClick}
        >
          Restart
        </Button>
      </div>
    </div>
  )
}

let nextPlayerStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "5px",
  fontFamily: "palatino",
  fontSize: "28px",
  textShadow: "0 2px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.16)"
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
