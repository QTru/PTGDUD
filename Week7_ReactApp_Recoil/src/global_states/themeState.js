import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

let themeState = atom({
  key: "themeState",
  default: "dark",
  effects: [persistAtom],
});

export default themeState;
