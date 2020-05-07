import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import SStripeCheckoutButton from "../../components/stripe-button/stripe-button";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout-page.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const total = useSelector((state) => selectCartItemsTotal(state));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">*Please use the following test credit card for payments* 
        <br/>
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
