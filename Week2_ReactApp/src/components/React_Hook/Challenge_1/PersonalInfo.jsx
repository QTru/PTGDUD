import React from 'react'
import { useEffect } from 'react'
import './PersonalInfo.css'

function PersonalInfo({info, setInfo}) {
  const updateInfo = (e) => {
    let inputElement = e.target;

    switch(inputElement.id) {
      case 'name':
        setInfo({...info, name: inputElement.value});
        break;
      case 'email':
        setInfo({...info, email: inputElement.value});
        break;
      case 'age':
        setInfo({...info, age: parseInt(inputElement.value)});
        break;
      default:
        setInfo(info);
        break;
    }
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div>
      <form action="">
        <label>Name: <input type="text" name="" id="name" onChange={updateInfo} /><br /></label>
        <label>Email: <input type="text" name="" id="email" onChange={updateInfo} /><br /></label>
        <label>Age: <input type="number" name="" id="age" onChange={updateInfo} /><br /></label>
      </form>
    </div>
  )
}

export default PersonalInfo