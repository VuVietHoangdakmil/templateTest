import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const BtnLeft: React.FC = () => {
  return (
    <div
      className=" flex items-center justify-center rounded-full w-[80px] h-[80px] bg-slate-200"
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#181B1D" }} />
    </div>
  );
};
export default BtnLeft;
