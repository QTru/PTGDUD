import React from 'react'
import './StatusBadge.css'

function StatusBadge(props) {
    return (
        <div id='status-badge' className={props.status}></div>
    )
}

export default StatusBadge