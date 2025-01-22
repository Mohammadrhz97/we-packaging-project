import P3 from "../assets/3.png";
import Marquee from "react-fast-marquee";

function Friends() {
  return (
    <div className=" flex items-center justify-center flex-col pt-28 mb-10 mt-32 bg-black/35 ">
      <h1 className="text-white font-IBMPlex font-bold text-2xl z-0">
        دوستان ما
      </h1>
      <div className="max-w-[1024px] rounded-xl">
        <Marquee
          className=" mt-8 rounded-t-xl"
          gradient="false"
          gradientColor="black"
        >
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
        </Marquee>
        <Marquee
          className="rounded-b-xl"
          gradient="false"
          gradientColor="black"
          direction="right"
        >
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
          <img src={P3} alt="" />
        </Marquee>
      </div>
    </div>
  );
}

export default Friends;
