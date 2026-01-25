import React from 'react'
import './AlertButton.css'

function Button(props) {
  return (
    <div className='button-wrapper' onClick={props.onClick}>
        <button type="button" className={props.type}>{props.type}</button>
    </div>
  )
}

export default Button