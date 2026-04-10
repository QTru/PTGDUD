import React from "react";
import { useRecoilValue } from "recoil";
import userState from "../../global_states/userState";

function About() {
  let { username } = useRecoilValue(userState);

  return (
    <div>
      <p>Username: {username}</p>
      <p>About</p>
    </div>
  );
}

export default About;
