import React from 'react'
import styles from './StatusButton.module.css'

function StatusButton(props) {
    return (
        <div className={styles.statusButton}>
            <button type="button" onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default StatusButton