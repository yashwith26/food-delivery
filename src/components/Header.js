import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setButtonname] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // console.log("Header render");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <Link to="/">
          <img className="w-[122px]" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4  hover:scale-110 hover:text-orange-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:scale-110 hover:text-orange-700">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="px-4 hover:scale-110 hover:text-orange-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:scale-110 hover:text-orange-700">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() =>
              btnName === "Login"
                ? setButtonname("Logout")
                : setButtonname("Login")
            }
            className="login"
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
