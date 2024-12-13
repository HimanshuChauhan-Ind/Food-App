import { icon } from "./constants";
import { Link } from "react-router";
import { Outlet } from "react-router";

const Header = () => {
  return (
    <div className="app">
      <div className="navbar shadow-lg h-20 flex justify-center items-center px-24 font-medium gap-x-60">
        <div className="navLogo p-x-10">
          <Link to="/">
            <img className="h-14" src={icon}></img>
          </Link>
        </div>
        <div className="navOptions p-10">
          <ul className="flex gap-x-10">
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <i className="fa-solid fa-briefcase mr-2"></i>Swiggy Corporate
            </li>
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <i className="fa-solid fa-magnifying-glass mr-2"></i>Search
            </li>
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <i className="lni lni-badge-decagram-percent align-middle text-lg mr-2"></i>
              Offers
            </li>
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <Link to="/help">
                <i className="fa-regular fa-life-ring mr-2"></i> Help
              </Link>
            </li>
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <i className="fa-regular fa-user mr-2"></i> Sign In
            </li>
            <li className="text-[#3d4152] hover:text-[#fc8019] hover:cursor-pointer">
              <i className="fa-solid fa-cart-shopping mr-2"></i> Cart
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
