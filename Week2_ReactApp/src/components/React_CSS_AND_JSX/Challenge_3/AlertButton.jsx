import React from 'react'
import styles from './AlertButton.module.css'

function Button(props) {
  return (
    <div className={styles.buttonwrapper} onClick={props.onClick}>
        <button type="button" className={styles[props.type]}>
            {props.type}
        </button>
    </div>
  )
}

export default Button