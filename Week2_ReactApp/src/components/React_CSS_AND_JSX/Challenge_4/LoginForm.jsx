import React from 'react'
import './LoginForm.css'

function LoginForm(props) {
  return (
    <div className={props.isLogin? "appear" : "disappear"}>
        <div>
            <button className='exitButton' type="button" onClick={() => props.onExit()}>X</button>
        </div>
        <div>
            <label htmlFor="username">Username: </label><input type="text" name="" id="" />
        </div>
        <div>
            <label htmlFor="password">Password: </label><input type="password" name="" id="" />
        </div>
        <div>
            <button className='loginButton' type="button" onClick={() => props.onExit()}>Login</button>
        </div>
    </div>
  )
}

export default LoginForm