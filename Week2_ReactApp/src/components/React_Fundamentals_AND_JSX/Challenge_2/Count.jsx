import React from 'react'
import styles from './Count.module.css'

function Count(props) {
    return (
        <div className={`${styles.count} ${props.count > 10? styles.red : styles.white}`}>
            <p>{props.count}</p>
        </div>
    )
}

export default Count