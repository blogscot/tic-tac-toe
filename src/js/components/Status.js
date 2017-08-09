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
        <Button bsStyle="primary"
          onClick={onClick}
        >
          {" "}Restart{" "}
        </Button>
      </div>
    </div>
  )
}

let nextPlayerStyle = {
  display: "flex",
  justifyContent: "center",
  fontSize: "28px"
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
