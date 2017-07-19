import React from 'react'
import '../../css/Status.css'

export default function Status(props) {
  const status = props.status
  return (
    <div>
      <div class="status">{status}&nbsp;&nbsp;
        <button 
          onClick={() => props.onClick()}>Restart</button>
      </div>     
    </div>
  )
}