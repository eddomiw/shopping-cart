import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Cart({ cartItems, updateCartItems }) {
  const [totalCost, setTotalCost] = useState();

  const calculateTotalCost = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      total += cartItems[itemId].quantity * cartItems[itemId].price;
    });
    return total;
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[itemId];
    updateCartItems(updatedCartItems);
  };

  // Update totalCost whenever cartItems change
  useEffect(() => {
    const calculatedTotalCost = calculateTotalCost();
    setTotalCost(calculatedTotalCost);
  }, [cartItems]);

  console.log(cartItems);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl py-5">Cart</h1>
      <div className="p-4 w-4/5">
        {Object.keys(cartItems).map((itemId) => (
          <div key={itemId}>
            <img
              className=" w-28 "
              src={cartItems[itemId].image}
              alt={itemId}
            ></img>
            <div>
              <div>{cartItems[itemId].title}</div>
              <div>Price: ${cartItems[itemId].price}</div>
            </div>
            <div>
              <div>Quantity: {cartItems[itemId].quantity}</div>
              <button
                type="button"
                data-testid={`removeButton ${itemId}`}
                onClick={() => handleRemoveItem(itemId)}
              >
                Remove
              </button>
            </div>
            <div>{cartItems[itemId].quantity * cartItems[itemId].price}</div>
          </div>
        ))}
      </div>
      <div className=" p-4 w-4/5  text-end">Total: ${totalCost}</div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  updateCartItems: PropTypes.func.isRequired,
};
