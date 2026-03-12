import React from 'react'
import styles from './Alert.module.css'

function Alert(props) {
  return (
    <div className={`${styles.container} ${styles[props.state]}`}>
        {props.state}
    </div>
  )
}

export default Alert