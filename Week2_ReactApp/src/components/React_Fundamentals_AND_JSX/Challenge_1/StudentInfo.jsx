import React from 'react'
import styles from './StudentInfo.module.css'

function StudentInfo(props) {
    return (
        <div className={styles.studentInfo}>
            <p>Student Name: {props.name}</p>
            <p>Student ID: {props.id}</p>
            <p>Student Class: {props.class}</p>
        </div>
    )
}

export default StudentInfo