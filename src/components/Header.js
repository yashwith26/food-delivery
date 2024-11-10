import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import image from "../images/company_logo_main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  // const [btnName, setButtonname] = useState("Login");

  //Feature not needed
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-yellow-50 lg:bg-gray-100 ">
      <div className="">
        <Link to="/">
          <img src={image} className="w-20 ml-10" alt="image" />
        </Link>
      </div>
      <div className="flex justify-between">
        <ul className="flex mx-2 px-2 justify-between items-center">
          {/* <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"} </li> */}
          <li className="px-5 hover:scale-110 hover:text-orange-700 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-7 hover:scale-110 hover:text-orange-700 font-semibold">
            <Link className="w-7" to="/aboutus">
              About Us
            </Link>
          </li>
          <li className="px-4 hover:scale-110 hover:text-orange-700 font-semibold">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4 hover:scale-110 hover:text-orange-700 font-semibold">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4 hover:scale-110 font-semibold hover:text-orange-700 ">
            <Link to="login">
              <button>Sign In</button>
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">
              {" "}
              <FontAwesomeIcon icon={faCartShopping} />({cartItems.length})
            </Link>
          </li>
          {/* <button
            onClick={() =>
              btnName === "Login"
                ? setButtonname("Logout")
                : setButtonname("Login")
            }
            className="login"
          >
            {btnName}
          </button> */}

          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
