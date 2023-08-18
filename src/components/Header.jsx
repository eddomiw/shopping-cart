import Navigation from "./Navigation";
import { useState } from "react";

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="flex justify-between w-full bg-pink-300 h-10 items-center">
      <button className="mx-4" onClick={toggleNavigation}>
        Navigation
      </button>
      <h1>SWEATOO</h1>
      <button className="mx-4"> Cart</button>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
}
