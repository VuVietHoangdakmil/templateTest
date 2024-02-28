import react from "react";
import BtnLeft from "./Button/Left";
import BtnRight from "./Button/Right";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
const Introduction: react.FC = () => {
  return (
    <div className="flex h-[791px]">
      <div className="w-[50%]">
        <div className=" w-[516px] h-[501px] mt-[150px] ml-[12vw] ">
          <div
            style={{
              width: "453px",
              height: "164px",
              fontWeight: 600,
              fontSize: "80px",
              lineHeight: "82px",
            }}
          >
            ENJOY LIFE SIP BY SIP
          </div>
          <p
            className="w-[516px] mt-[45px] "
            style={{ fontWeight: "400", fontSize: "18px", lineHeight: "30px" }}
          >
            <p style={{ display: "inline-block", color: "#AA9585" }}>
              Voi Coffee
            </p>{" "}
            is aimed at everyone, especially young, active, busy people. The
            brand is committed to providing customers with great coffee
            experiences, even when they are in a hurry.
          </p>
          <div className="flex h-[86px] w-[457px]  mt-[45px] items-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRight: "1px solid #4B5060",
                height: "100%",
              }}
            >
              <FontAwesomeIcon icon={faUser} className="px-[10px]" />
            </div>
            <div className="ml-[10px]">
              <div className="flex items-center mb-[10px]">
                <div
                  style={{
                    color: "#181B1D",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  Trusted Users
                </div>
                <div
                  className="w-[64.5px] h-[2px] ml-[10px]"
                  style={{ backgroundColor: "#AA9584" }}
                ></div>
              </div>
              <div className=" flex items-center mb-[10px]">
                <FontAwesomeIcon style={{ color: "#FFC529" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFC529" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFC529" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFC529" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFC529" }} icon={faStar} />
              </div>
              <div
                className="mb-[10px]"
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "18px",
                }}
              >
                <p
                  style={{
                    display: "inline-block",
                    color: "#AA9585",
                    marginRight: "5px",
                  }}
                >
                  13.5K
                </p>
                happy users all over the world
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center w-[180px] h-[64px] mt-[20px]"
            style={{
              backgroundColor: "#AA9585",
              borderTopRightRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          >
            <div
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "16px",
              }}
            >
              Oder Now
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] " style={{ backgroundColor: "#AA9585" }}>
        <div className="flex justify-center  items-center     mt-[150px] ">
          <BtnLeft />
          <div
            className="h-[540px] w-[408px] mx-[20px]"
            style={{
              backgroundImage: "url('../../public/img/coffe1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          ></div>
          <BtnRight />
        </div>
        <div className="flex mt-[20px]  justify-center  ">
          <input className="mx-[5px]" type="radio" name="fav_language" />
          <input className="mx-[5px]" type="radio" name="fav_language" />
          <input className="mx-[5px]" type="radio" name="fav_language" />
          <input className="mx-[5px]" type="radio" name="fav_language" />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
