import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, cartTotalSelector } from "../../global_states/cartState";
import { useEffect } from "react";
import "./Cart.css";

const items = [
  { name: "Apple", price: 5 },
  { name: "Banana", price: 10 },
  { name: "Orange", price: 8 },
  { name: "Grapes", price: 13 },
];

function Cart() {
  let [cart, setCart] = useRecoilState(cartState);
  let cartTotal = useRecoilValue(cartTotalSelector);

  function addToCart(item) {
    if (cart.some((cartItem) => cartItem.name === item.name))
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    else setCart([...cart, { ...item, quantity: 1 }]);
  }

  function removeFromCart(item) {
    let foundItem = cart.find((cartItem) => cartItem.name === item.name);
    if (foundItem != null) {
      if (foundItem.quantity > 1)
        setCart(
          cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          ),
        );
      else setCart(cart.filter((cartItem) => cartItem.name !== item.name));
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <div className="cart">
        {items.map((item) => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button type="button" onClick={() => addToCart(item)}>
              Add to cart
            </button>
            <button type="button" onClick={() => removeFromCart(item)}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
      <h2 style={{ textAlign: "center" }}>Cart total: {cartTotal}</h2>
    </div>
  );
}

export default Cart;
