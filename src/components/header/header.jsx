import { Link } from "react-router-dom";

export default function Header() {
  return (
<header className="flex flex-col md:flex-row justify-between items-center bg-blue-900 text-white p-4 w-full shadow-md">
  {/* Logo Section */}
  <Link to="/fakeshop/" className="text-white hover:text-gray-200 mb-2 md:mb-0">
    <div className="text-2xl text-cyan-300 border-b pb-2 shadow-sm">
      FakeShop
    </div>
  </Link>


  {/* Redux */}

    <div>
      Redux
    </div>


  {/* Navigation Section */}
  <div className="md:static md:w-auto w-full">
    <ul className="flex flex-col md:flex-row justify-center items-center text-lg">
      <Link to="/fakeshop/" className="w-full text-center md:w-auto">
        <li className="cursor-pointer mx-2 my-1 md:my-0">Home</li>
      </Link>
      <Link to="/fakeshop/cart" className="w-full text-center md:w-auto">
        <li className="cursor-pointer mx-2 my-1 md:my-0">Cart</li>
      </Link>
    </ul>
  </div>
</header>

  );
}
