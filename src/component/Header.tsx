import react from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header: react.FC = () => {
  return (
    <div className="fixed  top-0 left-0 right-0" style={{ zIndex: "9999" }}>
      <div
        className=" flex w-3/4 items-center h-[100px] mx-[auto] my-0  "
        style={{ borderBottom: "1px solid #CADAD4 " }}
      >
        <div className="flex-1">
          <div
            className="w-[60px] h-[60px]"
            style={{ fontWeight: 600, fontFamily: "Tilt Prism" }}
          >
            Vôi Cà Phê
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex  justify-between">
            <div
              className="mx-[40px]"
              style={{ borderBottom: "1px solid black" }}
            >
              Home
            </div>
            <div className="mx-[40px]">Service</div>
            <div className="mx-[40px]">Our Menu</div>
            <div className="mx-[40px]">About us</div>
            <div className="mx-[40px]">Contact</div>
          </div>
          <div className="flex">
            <div className="mx-[20px]">
              <FontAwesomeIcon icon={faUser} className="mr-[5px] text-[20px]" />
              Account
            </div>
            <div className="mx-[20px]">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="mr-[5px]  text-[20px]"
              />
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
