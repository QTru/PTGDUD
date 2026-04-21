import { atom, selector } from "recoil";

export let cartState = atom({
  key: "cartState",
  default: [],
});

export let cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) =>
    get(cartState).reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0,
    ),
});
