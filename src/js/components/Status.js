import React from 'react'
import { Button } from 'react-bootstrap'

import PropTypes from 'prop-types'

export default function Status(props) {
  const status = props.status
  return (
    <div>
      <div style={nextPlayerStyle}>{status}</div>     
      <div style={nextPlayerStyle}>
        <Button 
          bsStyle="primary" 
          onClick={() => props.onClick()}> Restart </Button>
      </div>
    </div>
  )
}

let nextPlayerStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '28px'
}

Status.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func
}