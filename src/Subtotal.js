import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const formatCurrency = (value) => {
    return `Rupees ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
