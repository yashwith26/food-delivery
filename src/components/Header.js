import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setButtonname] = useState("Login");
  console.log("Header render");

  useEffect(() => {
    console.log("UseEffect Called");
  }, [btnName]);

  return (
    <div className="header">
      <div>
        <img className=" logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
