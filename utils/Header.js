import { icon } from "./constants";

const Header = () => {
  console.log(icon);
  return (
    <div className="navbar shadow-lg h-20 flex justify-between items-center px-24 font-medium">
      <div className="navLogo p-x-10">
        <img className="h-14" src={icon}></img>
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
            <i className="fa-regular fa-life-ring mr-2"></i> Help
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
  );
};

export default Header;
