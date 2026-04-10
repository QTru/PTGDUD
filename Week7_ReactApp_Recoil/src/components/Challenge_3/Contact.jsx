import React from "react";
import { useRecoilValue } from "recoil";
import userState from "../../global_states/userState";

function Contact() {
  let { username } = useRecoilValue(userState);

  return (
    <div>
      <p>Username: {username}</p>
      <p>Contact</p>
    </div>
  );
}

export default Contact;
