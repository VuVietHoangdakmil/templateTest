import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const BtnRight: React.FC = () => {
  return (
    <div
      className=" text-white flex items-center justify-center rounded-full w-[80px] h-[80px]"
      style={{ backgroundColor: "#291E24" }}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};
export default BtnRight;
