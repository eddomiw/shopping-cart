import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="flex justify-between w-full bg-pink-300 h-10 items-center flex-shrink-0">
      <button className="ml-6" onClick={toggleNavigation}>
        Navigation
      </button>
      <Link to="/">
        <h1>SWEATOO</h1>
      </Link>
      <Link to="cart" className="no-underline mr-6">
        Cart
      </Link>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
}
