import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type PropsCol = {
  title: string;
  list: { name: string; active: boolean; icon?: IconDefinition }[];
};
const Col: react.FC<PropsCol> = ({ title, list }) => {
  return (
    <div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "18px",
          color: "#FFFFFF",
        }}
      >
        {title}
      </div>
      <ul className="list-none">
        {list.map((item) => (
          <li
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
              color: `${item.active ? "#FFFFFF" : "#B3B8BC"}`,
              margin: "20px 0",
            }}
            className={`${item.active ? "underline decoration-solid" : ""}`}
          >
            <div className="flex items-center">
              {item.icon && <FontAwesomeIcon icon={item.icon} />}

              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Contact: react.FC = () => {
  return (
    <div className="w-[100%] h-[350px] mx-auto  flex justify-between">
      <div>
        <div
          className="w-[61px] h-[52px]"
          style={{
            color: "#FFFFFF",
            fontWeight: 600,
            fontFamily: "Tilt Prism",
          }}
        >
          Vôi cà phê
        </div>
        <div
          className="w-[322px]"
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "30px",
            color: "#808E98",
          }}
        >
          Sit amet nisl purus in mollis nunc sed id semper. In vitae turpis
          massa sed. Sed velit dignissim sodales ut e
        </div>
      </div>

      <div className="flex">
        <div className="mr-[100px]">
          <Col
            title="COMPANY"
            list={[
              { name: "About us", active: false },
              { name: "Features", active: true },
              { name: "Watch Our Video", active: false },
              { name: "Contact Us", active: false },
            ]}
          />
        </div>
        <div className="mr-[100px]">
          <Col
            title="OUR POLICIES"
            list={[
              { name: "Privacy Policy", active: false },
              { name: "Terms of Use", active: false },
              { name: "Cookies Policy", active: false },
              { name: "GDPR Policy", active: false },
              { name: " Refund Policy", active: false },
            ]}
          />
        </div>
        <Col
          title="SOCIAL MEDIA"
          list={[
            { name: "Facebook", active: false },
            { name: "Twitter", active: false },
            { name: "Instagram", active: false },
            { name: "TikTok", active: false },
          ]}
        />
      </div>
    </div>
  );
};

const SendMessage: react.FC = () => {
  return (
    <div
      className="w-[1280px] h-[422px] drop-shadow-lg"
      style={{
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        backgroundColor: "#F8FAFC",
      }}
    >
      <div className="w-[620px] mx-auto text-center pt-[80px]">
        <div style={{ fontWeight: 600, fontSize: "48px", lineHeight: "72px" }}>
          Deliciousness to your inbox
        </div>
        <div
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28px",
            color: "#5F6575",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </div>
        <div style={{ position: "relative", marginTop: "40px" }}>
          <input
            placeholder="your email address..."
            style={{
              backgroundColor: "#FFFFFF",
              width: "480px",
              height: "80px",
              paddingLeft: "20px",
              borderTopRightRadius: "24px",
              borderBottomLeftRadius: "24px",
            }}
          ></input>
          <div
            style={{
              backgroundColor: "#000000",
              width: "160px",
              height: "60px",
              borderTopRightRadius: "24px",
              borderBottomLeftRadius: "24px",
              position: "absolute",
              cursor: "pointer",
              top: "9px",
              right: "77px",
            }}
            className="flex items-center justify-center"
          >
            <div
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Footer: react.FC = () => {
  return (
    <div>
      <div
        className="h-[801px] mt-[300px]"
        style={{ backgroundColor: "#000000", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-227px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <SendMessage />
        </div>
        <div className="p-[300px]">
          <Contact />
          <div
            style={{
              backgroundColor: "#FFFFFF",
              height: "1px",
              width: "100%",
              color: "red",
              margin: "0 auto",
            }}
          ></div>
          <div
            style={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "14px",
              textAlign: "center",
              color: "#94999C",
              marginTop: "50px",
            }}
          >
            © 2022 VoiCoffee - All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
