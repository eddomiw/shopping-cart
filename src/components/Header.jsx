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
      <button className="mr-auto basis-20" onClick={toggleNavigation}>
        <img
          className="h-9"
          src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-17.jpg"
          alt="Navigation"
        />
      </button>
      <Link to="/">
        <h1 className="px-5 mx-auto">SWEATOO</h1>
      </Link>
      <Link to="cart" className="basis-20 flex text-center gap-1 px-5 ml-auto">
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
