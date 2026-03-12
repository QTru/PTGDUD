import React from 'react'
import styles from './Button.module.css'

function Button(props) {
  return (
    <div className={styles.buttonwrapper}>
        <button type="button" className={styles[props.type]}>{props.type}</button>
    </div>
  )
}

export default Button