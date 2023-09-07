import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container  mx-auto px-10 md:mx-0 md:px-0 ">
        <div className="md:flex justify-around ">
          {/* Left Section */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-serif font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm mb-2">
              Stay up-to-date with our latest apparel collections and exclusive
              offers.
            </p>
            <form className="flex flex-col md:flex-row w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 md:w-full text-white border-2 border-gray-600 pl-4 py-1 rounded-l mb-2 md:mb-0 focus:outline-none"
              />
              <button
                type="button"
                className="bg-pink-700 hover:bg-pink-800 text-white px-2 py-1 rounded-r focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex md:w-1/3 justify-between">
            {/* Middle Section */}
            <div>
              <h2 className="text-2xl font-bold font-serif mb-2">
                Quick Links
              </h2>
              <ul>
                <li className="mb-2">
                  <Link to="/apparel">Shop</Link>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* Right Section */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold font-serif mb-2">Follow Us</h2>
              <div className="flex flex-col text-start">
                <a href="#" className="text-l mb-2 hover:text-blue-500">
                  <i>Facebook</i>
                </a>
                <a href="#" className="text-l mb-2 hover:text-blue-400 ">
                  <i>Twitter</i>
                </a>
                <a href="#" className="text-l mb-2 hover:text-red-500 ">
                  <i>Instagram</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
