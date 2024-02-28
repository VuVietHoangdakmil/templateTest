import react from "react";
const Background: react.FC = () => {
  return (
    <div
      className="h-[511px] w-full   "
      style={{
        backgroundImage: "url('../../public/img/backGround.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    >
      <div className="w-3/4 h-full mx-auto items-center flex justify-end">
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "white",
            width: "492px",
          }}
          className=" text-right"
        >
          MORE THAN JUST A COFFEE SHOP
        </div>
      </div>
    </div>
  );
};
export default Background;
