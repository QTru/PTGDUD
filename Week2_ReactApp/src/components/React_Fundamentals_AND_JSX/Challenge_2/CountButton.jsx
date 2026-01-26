import React from 'react'
import './CountButton.css'

function CountButton(props) {
    function clickEvent() {
        switch (props.operation) {
            case '+':
                props.addition();
                break;
            case '-':
                props.subtraction();
                break;
            case 'reset':
                props.reset();
                break;
            default:
                break;
        }
    }

    return (
        <div className='button'>
            <button type="button" onClick={clickEvent}>{props.operation}</button>
        </div >
    )
}

export default CountButton