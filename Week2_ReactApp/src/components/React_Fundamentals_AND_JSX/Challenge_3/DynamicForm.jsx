import React from 'react'
import styles from './DynamicForm.module.css'
import { useState } from 'react'

function DynamicForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className={styles.dynamicForm}>
            <div>
                <label>Name: </label>
                <input type="text" name="" id="" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="" id="" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <p>Name: {name}</p>
            </div>
            <div>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}

export default DynamicForm