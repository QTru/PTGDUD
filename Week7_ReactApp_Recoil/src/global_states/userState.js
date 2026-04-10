import { atom } from "recoil";

let userState = atom({
  key: "userState",
  default: {
    username: "sa",
    password: "sapassword",
    isLoggedIn: false,
  },
});

export default userState;
