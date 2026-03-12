import React from 'react'
import styles from './LoginForm.module.css'

function LoginForm(props) {
  return (
    <div className={styles[props.isLogin ? "appear" : "disappear"]}>
        <div>
            <button className={styles.exitButton} type="button" onClick={() => props.onExit()}>X</button>
        </div>
        <div>
            <label>Username: </label><input type="text" name="" id="" />
        </div>
        <div>
            <label>Password: </label><input type="password" name="" id="" />
        </div>
        <div>
            <button className={styles.loginButton} type="button" onClick={() => props.onExit()}>Login</button>
        </div>
    </div>
  )
}

export default LoginForm