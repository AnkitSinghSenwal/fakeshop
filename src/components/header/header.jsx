import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-black text-white p-4 w-full shadow-md">
      {/* Logo Section */}
      <Link
        to="/fakeshop/"
        className="text-white hover:text-gray-200 mb-2 md:mb-0 hover:bg-gray-700 rounded p-2"
      >
        <div className="text-2xl text-cyan-300 border-b pb-2 shadow-sm">
          FakeShop
        </div>
      </Link>

      {/* Navigation Section */}
      <div className="md:static md:w-auto w-full flex justify-center">
        <ul className="flex sm:flex-col md:flex-row justify-center items-center text-lg">
          <li className="cursor-pointer mx-2 my-1 p-2 md:my-0 hover:bg-gray-700 rounded">
            <Link to="/fakeshop/">
              <FaHome size={40} color="#2874F0" />
            </Link>{" "}
          </li>

          <li className="cursor-pointer mx-2 my-1 p-2 md:my-0 hover:bg-gray-700 rounded">
            <Link to="/fakeshop/cart">
              <FaShoppingCart size={40} color="#008080" />
            </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
}
