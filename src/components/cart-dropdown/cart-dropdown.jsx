import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <div className="cart-dropdown">
      <div className=" cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
