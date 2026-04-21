import { useState } from "react";
import "./App.css";
import Rectangle from "./components/Challenge_5a/Rectangle";
import Cart from "./components/Challenge_5b/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Challenge 5a */}
      {/* <Rectangle /> */}

      {/* Challenge 5b */}
      <Cart />
    </>
  );
}

export default App;
