import react from "react";
import BtnLeft from "./Button/Left";
import BtnRight from "./Button/Right";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

type PropsItem = { img: string; title?: string; content: string };
const Item: react.FC<PropsItem> = ({ img, title, content }) => {
  return (
    <div
      style={{
        width: "325px",
        height: "309px",
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        position: "relative",
      }}
    >
      <div
        className="h-[177px] w-[242px]"
        style={{
          position: "absolute",
          top: "-77px",
          left: "40px",
          backgroundImage: `url('${img}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="h-[100px]"></div>
      <div className="ml-[20px]">
        <div
          style={{
            color: "#071731",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "56px",
            height: "56px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            width: "241px",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "22.5px",
            color: "#071731",
          }}
        >
          {content}
        </div>
      </div>
      <div className="flex justify-center mt-[10px]">
        <div
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: "#291E24",
            borderRadius: "10px",
            marginRight: "20px",
          }}
          className="flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="
#FFFFFF"
          />
        </div>
        <div
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: "#291E24",
            borderRadius: "10px",
          }}
          className="flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faHeart}
            color="
#FFFFFF"
          />
        </div>
      </div>
      <div
        className="w-[152px] h-[42px] flex justify-center items-center"
        style={{
          backgroundColor: "#291E24",
          borderRadius: "10px",
          position: "absolute",
          bottom: "-20px",
          left: "84px",
        }}
      >
        <div
          style={{
            fontWeight: "700px",
            fontSize: "18px",
            lineHeight: "27px",
            color: "white",
          }}
        >
          50.000 VND
        </div>
      </div>
    </div>
  );
};
const Menu: react.FC = () => {
  return (
    <div className="bg-slate-100 h-[791px]">
      <div className="w-3/4   mx-[auto]  ">
        <div className="flex pt-[150px] items-center">
          <div className="w-[70%]">
            <div
              style={{
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "56px",
                color: "#071731",
              }}
            >
              Specical menu for you
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "30px",
                color: "#5F6575",
                marginTop: "12px",
              }}
            >
              Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It
              May Also Reduce The Risk Of Several Health Issues.
            </div>
          </div>
          <div className="w-[30%] flex justify-end">
            <div className="mr-[40px]">
              <BtnLeft />
            </div>
            <BtnRight />
          </div>
        </div>
        <div className="flex justify-between mt-[80px]">
          <Item
            img="../../public/img/item1.png"
            content="100% Natural Arbika or Robusta, 30ml Cup"
          />

          <Item
            img="../../public/img/item2.png"
            content="Coffee 50%, Milk 50%, 280ml"
            title="Capuccino"
          />

          <Item
            img="../../public/img/item3.png"
            content="100% Natural Arbika or Robusta, 30ml Cup"
            title="Americano"
          />
        </div>
      </div>
    </div>
  );
};
export default Menu;
