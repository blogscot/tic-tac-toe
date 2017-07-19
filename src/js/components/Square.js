import React from "react";
import '../../css/Square.css'

export default function Square(props) {
  return (
      <div 
        class={"active"}
        onClick={() => props.onClick() }>
        {props.value}
      </div>
  )
}