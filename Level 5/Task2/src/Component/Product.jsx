import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="productcard">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="productname">{product.name}</h2>
      <p className="productprice">Rs.{product.price}</p>
      <button className="addtocartbtn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
