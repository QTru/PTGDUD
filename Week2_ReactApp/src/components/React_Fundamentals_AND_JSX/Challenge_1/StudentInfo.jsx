import React from 'react'
import './StudentInfo.css'

function StudentInfo(props) {
    return (
        <div className='student-info'>
            <p>Student Name: {props.name}</p>
            <p>Student ID: {props.id}</p>
            <p>Student Class: {props.class}</p>
        </div>
    )
}

export default StudentInfo