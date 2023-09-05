import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navigation({ onClose }) {
  return (
    <div className="w-64 h-full bg-black text-white fixed top-0 left-0 overflow-hidden py-5">
      <button
        className="close-button relative top-1 left-3 text-4xl pb-4 bg-none border-none text-white cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <h3 className="sidebar-header text-2xl text-center pb-5">Navigation</h3>
      <ul className="sidebar-nav list-none p-0 text-white">
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
    </div>
  );
}

Navigation.propTypes = {
  onClose: PropTypes.func.isRequired,
};
