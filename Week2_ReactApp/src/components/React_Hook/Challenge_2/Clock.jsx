import React from 'react'
import { useEffect, useState } from 'react'
import './Clock.css'

function Clock() {
  const getCurrentTime = () => {
    let currentDate = new Date();
    
    return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
  };
  
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    let myInterval = setInterval(() => { setTime(getCurrentTime()); }, 1000);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <h1>{time}</h1>
  )
}

export default Clock