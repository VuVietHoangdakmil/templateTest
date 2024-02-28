import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BtnLeft from "./Button/Left";
import BtnRight from "./Button/Right";
const arr = [1, 2, 3, 4];
const HappyCustomer: react.FC = () => {
  const [active, setActive] = useState<number>(3);
  return (
    <div className="w-[1170px] h-[578px] mx-auto mt-[140px]">
      <div className=" grid justify-items-center ">
        <div
          style={{
            color: "#071731",
            fontWeight: "600",
            fontSize: "56px",
            lineHeight: "56px",
          }}
        >
          Happy Customer
        </div>
        <div
          style={{
            marginTop: "10px",
            textAlign: "center",
            color: "#5F6575",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "40px",
            height: "90px",
            width: "645px",
          }}
        >
          So perhaps peopel who are genetically geared to reach to that extra
          cup of coffee could be boosting their health, as well as their
          productivity.
        </div>
      </div>

      <div className="flex mt-[70px]">
        <div className="w-[280px]">
          <div
            className=" w-full h-[280px]   "
            style={{
              backgroundImage: "url('../../public/img/avatar.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50%",
              backgroundColor: "#fff7e9",
              position: "relative",
            }}
          >
            <div
              className="flex"
              style={{
                position: "absolute",
                right: "25px",
                transform: "rotate(8deg)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "24px",
                  backgroundColor: "#071731",
                  borderRadius: "100px 0px 0px 100px",
                  marginRight: "15px",
                }}
              ></div>
              <div
                style={{
                  width: "12px",
                  height: "24px",
                  backgroundColor: "#071731",
                  borderRadius: "100px 0px 0px 100px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex mt-[20px]  justify-center  ">
            {arr.map((item) => (
              <div
                onClick={() => {
                  setActive(item);
                }}
                className="h-[15px] w-[15px] rounded-full "
                style={{
                  backgroundColor: item !== active ? "#AA9584" : "#291E24",
                  cursor: "pointer",
                  margin: "0 5px",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="ml-[70px] mt-[30px]">
          <div
            className="w-[812px]"
            style={{ fontWeight: 500, fontSize: "30px", lineHeight: "47px" }}
          >
            “Voi Coffee The App clearly displays content as well as easy
            operations to help users have a good experience.”
          </div>

          <div className="flex mt-[60px]">
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "27px",
                }}
              >
                JOHN DOE
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#5F6575",
                }}
              >
                Sunior Designer of Lomosity
              </div>
            </div>

            <div className=" flex items-center mb-[10px] ml-[150px]">
              <FontAwesomeIcon style={{ color: "#F1A32D" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "#F1A32D" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "#F1A32D" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "#F1A32D" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "#DABDA3" }} icon={faStar} />
            </div>
          </div>
          <div className="flex justify-end ">
            <div className="mr-[50px] ">
              <BtnLeft />
            </div>
            <BtnRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HappyCustomer;
