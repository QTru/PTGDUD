import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className='button-wrapper'>
        <button type="button" className={props.type}>{props.type}</button>
    </div>
  )
}

export default Button