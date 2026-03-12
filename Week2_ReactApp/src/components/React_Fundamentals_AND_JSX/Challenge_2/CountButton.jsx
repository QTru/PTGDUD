import React from 'react'
import styles from './CountButton.module.css'

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
        <div className={styles.button}>
            <button type="button" onClick={clickEvent}>{props.operation}</button>
        </div >
    )
}

export default CountButton