import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex fixed top-0 left-0 right-0 justify-between items-center bg-white border-2 border-[#4a4a4a] h-[70px] z-50">
      <div className="logo-container ml-5.5">
        <img className="w-15 " alt="Foodhub image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex justify-evenly list-none mr-5">
          <li className="text-gray-800 font-semibold text-[18px] hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-800 font-semibold text-[18px] hover:text-orange-500">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="text-gray-800 font-semibold text-[18px] hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-gray-800 font-semibold text-[18px] hover:text-orange-500">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button
            className="ml-1.5 text-gray-800 font-semibold text-[18px] hover:text-orange-500"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          
        </ul>
      </div>
    </div>
  );
};
{/* <li>
            <p style={{ display: "inline" }}>
              online status : {onlineStatus ? "🟢" : "🔴"}
            </p>
          </li> */}
