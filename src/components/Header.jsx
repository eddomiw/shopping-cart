import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="flex justify-between w-full bg-pink-300 h-10 items-center flex-shrink-0 ">
      <button className="mr-auto px-5 basis-20" onClick={toggleNavigation}>
        Navigation
      </button>
      <Link to="/">
        <h1 className="basis-20 px-5 mx-auto">SWEATOO</h1>
      </Link>
      <Link
        to="cart"
        className="no-underline basis-20 text-center px-5 ml-auto"
      >
        Cart
      </Link>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
}
