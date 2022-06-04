import { FiUserCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarLoginAdmin = () => {
  return (
    <nav className="flex justify-between items-center px-4 xl:px-0 lg:mb-10 container mx-auto max-w-screen-sm sm:max-w-screen-xl">
      <div className="flex items-center relative">
        <Link to="/">
          <img
            src="assets/shoe.png"
            alt="logo"
            className="h-20 w-20 sm:w-24 sm:h-24"
          />
        </Link>
        <Link
          to="/"
          className="hidden sm:block text-primary -ml-2 logo-name text-xl"
        >
          Shoe Time
        </Link>
      </div>

      <div className="flex items-center relative ">
        <ul className="flex space-x-3">
          <li className="flex items-center">
            <Link
              to="/admin"
              className="hover:text-primary md:ml-3 flex items-center"
            >
              <FiUserCheck className="mr-1 text-xl" /> Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoginAdmin;
