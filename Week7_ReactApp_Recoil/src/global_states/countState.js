import { atom } from "recoil";

let countState = atom({
  key: "countState",
  default: 0,
});

export default countState;
