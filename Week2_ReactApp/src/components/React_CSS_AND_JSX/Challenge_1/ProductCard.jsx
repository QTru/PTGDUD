import React from 'react'
import './ProductCard.css'
import rice from "../../../assets/rice.png"

function ProductCard() {
  return (
    <div>
        <div className='product-card'>
            <img src={rice} alt="rice.png" />
            <p>Rice</p>
            <p>$20</p>
            <button type="button">Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard