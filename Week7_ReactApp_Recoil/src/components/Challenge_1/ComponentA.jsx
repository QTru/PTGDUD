import React from "react";
import { useRecoilValue } from "recoil";
import countState from "../../global_states/countState";

function ComponentA() {
  let count = useRecoilValue(countState);

  return <div>Count: {count}</div>;
}

export default ComponentA;
