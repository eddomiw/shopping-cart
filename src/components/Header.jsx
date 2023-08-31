import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Header({ cartItems }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const totalItemCount = Object.keys(cartItems).length;

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="flex justify-between w-full bg-pink-700 px-5 h-11 items-center flex-shrink-0 ">
      <button className="mr-auto basis-20" onClick={toggleNavigation}>
        Navigation
      </button>
      <Link to="/">
        <h1 className="px-5 mx-auto">SWEATOO</h1>
      </Link>
      <Link to="cart" className="basis-20 flex text-center gap-1 px-5 ml-auto">
        <button>Cart</button>
        <div>{totalItemCount}</div>
      </Link>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
}
Header.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
