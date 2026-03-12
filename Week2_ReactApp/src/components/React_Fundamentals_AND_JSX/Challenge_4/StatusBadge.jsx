import React from 'react'
import styles from './StatusBadge.module.css'

function StatusBadge(props) {
    return (
        <div className={`${styles.statusBadge} ${styles[props.status]}`}></div>
    )
}

export default StatusBadge