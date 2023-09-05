import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      {Object.keys(cartItems).length === 0 ? (
        <div className="flex flex-col gap-3 justify-center items-center min-h-[80vh]">
          <div>YOUR CART IS EMPTY </div>
          <Link to="/apparel">
            <button className="bg-black text-white p-2 px-4 rounded-lg focus:outline-none">
              SHOP OUR PRODUCTS
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-[80vh]">
          <h1 className="text-center text-2xl py-5">Cart</h1>
          <div className="p-4 w-4/5">
            {Object.keys(cartItems).map((itemId) => (
              <div className="py-5" key={itemId}>
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
                <div>
                  {cartItems[itemId].quantity * cartItems[itemId].price}
                </div>
              </div>
            ))}
          </div>
          <div className=" p-4 w-4/5  text-end">Total: ${totalCost}</div>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  updateCartItems: PropTypes.func.isRequired,
};
