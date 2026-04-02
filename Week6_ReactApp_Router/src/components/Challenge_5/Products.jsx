import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

function Products() {
  return (
    <div>
      <p>Products</p>
      {products.map((p) => (
        <div key={p.id} style={{ display: "inline-block" }}>
          <Link to={`${p.id}`}>{p.name}</Link>|
        </div>
      ))}
    </div>
  );
}

export default Products;
