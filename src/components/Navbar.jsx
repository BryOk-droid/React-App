import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="mx-auto px-4 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold text-gray-800">
            YourBrand
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-500 px-3 py-2">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500 px-3 py-2">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-500 px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
