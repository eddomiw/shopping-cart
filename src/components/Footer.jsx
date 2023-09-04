export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto ">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 px-10">
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm mb-2">
            Stay up-to-date with our latest apparel collections and exclusive
            offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white border-2 border-gray-600 px-2 py-1 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section */}
        <div className="flex w-full justify-around mt-5">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/products">Shop</a>
              </li>
              <li className="mb-2 ">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
            <div className="flex flex-col items-start ">
              <a href="#" className="text-l mb-2 hover:text-blue-500">
                <i>Facebook</i>
              </a>
              <a href="#" className="text-l mb-2 hover:text-blue-400">
                <i>Twitter</i>
              </a>
              <a href="#" className="text-l mb-2 hover:text-red-500">
                <i>Instagram</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
