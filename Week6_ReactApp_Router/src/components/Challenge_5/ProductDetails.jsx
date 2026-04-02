import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.filter((p) => p.id === parseInt(id))[0];
  const navigate = useNavigate();

  return (
    <div>
      <p>Product: {product.name}</p>
      <button type="button" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}

export default ProductDetails;
