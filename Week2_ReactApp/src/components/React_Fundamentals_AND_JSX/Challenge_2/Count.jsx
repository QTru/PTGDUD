import React from 'react'
import './Count.css'

function Count(props) {
    return (
        <div id='count' className={props.count > 10 ? 'red' : 'white'}>
            <p>{props.count}</p>
        </div>
    )
}

export default Count