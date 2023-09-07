import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const itemClass = cart ? "in-cart" : ""
  const buttonClass = cart ? "remove" : "add"

  function handleCartClick() {
    setCart(!cart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleCartClick}>{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
