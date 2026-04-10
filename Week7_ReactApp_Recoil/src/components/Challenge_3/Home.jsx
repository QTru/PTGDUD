import React from "react";
import { useRecoilValue } from "recoil";
import userState from "../../global_states/userState";

function Home() {
  let { username } = useRecoilValue(userState);

  return (
    <div>
      <p>Username: {username}</p>
      <p>Home</p>
    </div>
  );
}

export default Home;
