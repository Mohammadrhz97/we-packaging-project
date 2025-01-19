import P1 from "../assets/1.jpg";
import { TypeAnimation } from "react-type-animation";
import { SlArrowDown } from "react-icons/sl";
import Blb1 from "../assets/blb1.png";
import Blb2 from "../assets/blb2.png";

function Hero() {
  return (
    <div className="bg-black ">
      <div className="max-w-[1024px] mx-auto h-lvh flex justify-center items-center flex-col-reverse md:flex-row ">
        <div className=" text-gray-300 min-w-[500px] mr-[-200px] h-full flex items-center justify-center flex-col text-3xl z-10  ">
          <div className=" relative z-10 mt-11 top-[150px] left-11">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                display: "block",
              }}
              speed={20}
              sequence={[`Designing Dreams,\nPackaging Perfection`, 2000, ""]}
              className="font-Playwrite font-bold leading-loose "
              repeat={Infinity}
            />
          </div>
          <div className=" max-w-26 h-auto mt-[-50%]   ">
            <img src={Blb1} alt="/" className="w-26 h-26 blur-2xl" />
            <img
              src={Blb2}
              alt="/"
              className="mt-[-90%] w-23 h-23 ml-16 blur-2xl"
            />
          </div>
          <button className="relative flex items-center font-IBMPlex text-xl mt-[-30%] gap-4 border border-gray-400 p-2 px-7 z-10 left-16">
            <span>
              <SlArrowDown className="w-4 h-4 text-gray-500" />
            </span>
            محصولات
          </button>
        </div>

        <img src={P1} alt="1" className="h-full w-auto object-contain mr-16 " />
      </div>
    </div>
  );
}

export default Hero;
