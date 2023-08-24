import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Apparel from "./components/Apparel.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import "./index.css";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "apparel", element: <Apparel /> },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
