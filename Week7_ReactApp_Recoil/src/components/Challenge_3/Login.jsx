import React from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import userState from "../../global_states/userState";
import { useNavigate } from "react-router-dom";

function Login() {
  let [user, setUser] = useRecoilState(userState);
  let username = useRef(""),
    password = useRef("");
  let navigate = useNavigate();

  function login() {
    if (
      username.current.value === user.username &&
      password.current.value === user.password
    ) {
      setUser({ ...user, isLoggedIn: true });
      username.current.value = "";
      password.current.value = "";
      navigate("home");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            id="username"
            ref={username}
            placeholder="sa"
          />
        </label>

        <label htmlFor="password" style={{ display: "block" }}>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            ref={password}
            placeholder="sapassword"
          />
        </label>
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
