import React from 'react'
import './Alert.css'

function Alert(props) {
  return (
    <div className={props.state}>
        {props.state}
    </div>
  )
}

export default Alert