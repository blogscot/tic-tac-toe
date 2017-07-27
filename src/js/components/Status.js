import React from 'react'
import '../../css/Status.css'

import PropTypes from 'prop-types'

export default function Status(props) {
  const status = props.status
  return (
    <div>
      <div class="status">{status}</div>     
      <div class="status">
        <button onClick={() => props.onClick()}>Restart</button>
      </div>
    </div>
  )
}

Status.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func
}