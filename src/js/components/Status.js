import React from 'react'
import '../../css/Status.css'
import { Button } from 'react-bootstrap'

import PropTypes from 'prop-types'

export default function Status(props) {
  const status = props.status
  return (
    <div>
      <div class="status">{status}</div>     
      <div class="status">
        <Button 
          bsStyle="primary" 
          onClick={() => props.onClick()}> Restart </Button>
      </div>
    </div>
  )
}

Status.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func
}