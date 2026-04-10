import React from "react";
import { useSetRecoilState } from "recoil";
import countState from "../../global_states/countState";

function ComponentB() {
  let setCount = useSetRecoilState(countState);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount((count) => count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default ComponentB;
