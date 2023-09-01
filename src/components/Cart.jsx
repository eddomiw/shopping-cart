import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Cart({ cartItems }) {
  const [totalCost, setTotalCost] = useState();

  const calculateTotalCost = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      total += cartItems[itemId].quantity * cartItems[itemId].price;
    });
    return total;
  };

  const handleRemoveItem = (itemId) => {
    // TODO: Implement item removal logic MAKE SURE IT IS THE CARTITEMS that is updated
  };

  // Update totalCost whenever cartItems change
  useEffect(() => {
    const calculatedTotalCost = calculateTotalCost();
    setTotalCost(calculatedTotalCost);
  }, [cartItems]);

  console.log(cartItems);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {Object.keys(cartItems).map((itemId) => (
          <div key={itemId}>
            <img
              className=" w-28 "
              src={cartItems[itemId].image}
              alt={itemId}
            ></img>
            Quantity: {cartItems[itemId].quantity}{" "}
            <div>Price: ${cartItems[itemId].price}</div>
            <button type="button" data-testid={`removeButton ${itemId}`}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>Total: ${totalCost}</div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
};
