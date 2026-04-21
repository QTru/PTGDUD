import { atom, selector } from "recoil";

export let rectangleState = atom({
  key: "rectangleState",
  default: {
    width: 1,
    height: 1,
  },
});

export let rectangleAreaSelector = selector({
  key: "rectangleAreaSelector",
  get: ({ get }) => {
    let rectangle = get(rectangleState);
    return rectangle.width * rectangle.height;
  },
});
