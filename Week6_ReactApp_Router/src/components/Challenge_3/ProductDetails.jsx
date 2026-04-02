import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.filter((p) => p.id === parseInt(id))[0];

  return <div>Product: {product.name}</div>;
}

export default ProductDetails;
