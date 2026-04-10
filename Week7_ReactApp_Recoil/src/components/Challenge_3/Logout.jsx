import React from "react";
import { useSetRecoilState } from "recoil";
import userState from "../../global_states/userState";
import { useNavigate } from "react-router-dom";

function Logout() {
  let setUser = useSetRecoilState(userState);
  let navigate = useNavigate();

  function logout() {
    setUser((user) => {
      return { ...user, isLoggedIn: false };
    });
    navigate("/");
  }

  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
