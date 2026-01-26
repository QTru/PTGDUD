import React from 'react'
import './StatusButton.css'

function StatusButton(props) {
    return (
        <div>
            <button id='status-button' type="button" onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default StatusButton