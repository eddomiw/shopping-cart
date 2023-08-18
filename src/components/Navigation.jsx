import PropTypes from "prop-types";

export default function Navigation({ onClose }) {
  return (
    <div className="w-64 h-full bg-slate-600 text-white fixed top-0 left-0 overflow-hidden py-5">
      <button
        className="close-button relative top-1 left-3 text-4xl pb-4 bg-none border-none text-white cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="sidebar-header text-2xl text-center pb-5">Navigation</div>
      <ul className="sidebar-nav list-none p-0 text-white">
        <li className="p-3 text-center">
          <a className="no-underline" href="#">
            Home
          </a>
        </li>
        <li className="p-3 text-center">
          <a className="no-underline" href="#">
            Apparel
          </a>
        </li>
        <li className="p-3 text-center">
          <a className="no-underline" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  onClose: PropTypes.func.isRequired,
};
