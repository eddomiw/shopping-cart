import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Apparel from "./components/Apparel.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Account from "./components/Account.jsx";
import Cart from "./components/Cart.jsx";
import "./index.css";
import { useState } from "react";

const Router = () => {
  const [itemCounts, setItemCounts] = useState({}); // Track item counts
  const [cartItems, setCartItems] = useState({});

  // Function to increment item count
  const incrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  // Function to decrement item count
  const decrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0),
    }));
  };

  const addToCart = (itemId, image, quantity, price, title) => {
    if (quantity > 0) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: {
          image,
          quantity,
          price,
          title,
        },
      }));
    } else {
      const updatedCartItems = { ...cartItems };
      delete updatedCartItems[itemId];
      setCartItems(updatedCartItems);
    }
  };

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App itemCounts={itemCounts} cartItems={cartItems} />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "apparel",
          element: (
            <Apparel
              itemCounts={itemCounts}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
              addToCart={addToCart}
            />
          ),
        },
        { path: "account", element: <Account /> },
        {
          path: "cart",
          element: (
            <Cart
              itemCounts={itemCounts}
              cartItems={cartItems}
              updateCartItems={updateCartItems}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
