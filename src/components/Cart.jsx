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
    return total.toFixed(2);
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
            <button className="bg-black text-white p-2 px-4 rounded-lg focus:outline-none ">
              SHOP OUR PRODUCTS
            </button>
          </Link>
        </div>
      ) : (
        <div className=" text-zinc-600 mb-3 flex flex-col items-center min-h-[80vh]">
          <h1 className="text-center text-2xl py-5">Cart</h1>
          <div className="p-4  w-4/5">
            <ul className=" hidden md:flex w-full justify-between border-b border-zinc-400">
              {" "}
              <li>PRODUCT</li>
              <li className="ml-20"> QUANTITY </li>
              <li> TOTAL </li>
            </ul>
            {Object.keys(cartItems).map((itemId) => (
              <div
                className="py-5 flex border-b gap-5 items-center border-zinc-400 "
                key={itemId}
              >
                <div>
                  <img
                    className=" w-28 "
                    src={cartItems[itemId].image}
                    alt={itemId}
                  ></img>
                </div>
                <div className="w-full flex flex-col gap-5">
                  <div>
                    <div>{cartItems[itemId].title}</div>
                    <div>${cartItems[itemId].price.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Quantity: {cartItems[itemId].quantity}</div>
                    <button
                      className="underline"
                      type="button"
                      data-testid={`removeButton ${itemId}`}
                      onClick={() => handleRemoveItem(itemId)}
                    >
                      REMOVE
                    </button>
                  </div>
                  {/*
                  <div>
                    {(
                      cartItems[itemId].quantity * cartItems[itemId].price
                    ).toFixed(2)}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className=" p-4 w-4/5  text-end">
            <div>TOTAL: ${totalCost}</div>
            <div className="text-gray-400">
              Shipping & taxes calculated at checkout{" "}
            </div>
          </div>

          <button className="bg-black text-white p-2 w-5/6 rounded-sm focus:outline-none ">
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  updateCartItems: PropTypes.func.isRequired,
};
