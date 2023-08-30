import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Apparel from "./components/Apparel.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import "./index.css";
import { useState } from "react";

const Router = () => {
  const [itemCounts, setItemCounts] = useState({}); // Track item counts

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App itemCounts={itemCounts} />,
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
            />
          ),
        },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart itemCounts={itemCounts} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
