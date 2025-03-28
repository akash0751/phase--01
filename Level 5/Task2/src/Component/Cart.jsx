import React from "react";

function Cart({ cartCount }) {
  return (
    <div className="cartcontainer">
      <span className="carticon">🛒 Cart</span>
      {cartCount > 0 && <span className="cartbadge">{cartCount}</span>}
    </div>
  );
}

export default Cart;



