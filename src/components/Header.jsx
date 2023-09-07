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
    <div className="flex justify-between w-full bg-pink-700 px-5 h-11 items-center text-black font-bold text-xl font-serif flex-shrink-0 ">
      <button className="mr-auto md:hidden basis-20" onClick={toggleNavigation}>
        <img
          className="h-9"
          src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-17.jpg"
          alt="Navigation"
        />
      </button>
      <Link to="/">
        <h1 className="px-5 mx-auto border-black border">SWEATOO</h1>
      </Link>
      <ul className=" list-none p-0 text-black font-sans hidden md:flex md:w-1/2 md:justify-between">
        <li className="p-3 text-center">
          <Link to="/" className="no-underline">
            Home
          </Link>
        </li>
        <li className="p-3 text-center">
          <Link to="/apparel" className="no-underline">
            Apparel
          </Link>
        </li>
        <li className="p-3 text-center">
          <Link to="/account" className="no-underline">
            Account
          </Link>
        </li>
      </ul>
      <Link
        to="cart"
        className="basis-20 flex text-center gap-1 px-5 ml-auto md:ml-0"
      >
        <button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/1200px-Shopping_cart_font_awesome.svg.png"
            alt="Cart"
          />
        </button>
        <div>{totalItemCount}</div>
      </Link>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
}
Header.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
