import Background from "./Background";
import P1 from "../assets/1.png";
import { TypeAnimation } from "react-type-animation";
import { SlArrowDown } from "react-icons/sl";
import Blb1 from "../assets/blb1.png";

function Hero() {
  return (
    <>
      <Background />
      <div className="bg-black/30 w-screen  ">
        <div className="mx-auto h-lvh flex justify-center items-center flex-col-reverse  lg:flex-row ">
          <div className="absolute lg:relative text-gray-300 md:min-w-[500px] max-w-[500px] lg:mr-[-200px] h-full flex items-center justify-center flex-col text-3xl z-10   ">
            <div className=" relative top-[120px] z-20">
              {/* typing animation */}
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  display: "block",
                }}
                speed={20}
                sequence={[`Designing Dreams,\nPackaging Perfection`, 2000, ""]}
                className="font-Playwrite font-bold leading-loose text-white mb-10  "
                repeat={Infinity}
              />
            </div>

            {/* bulb images */}
            <div className=" max-w-26 h-auto mt-[-50%] opacity-35   ">
              <img src={Blb1} alt="/" className="w-26 h-26 blur-2xl" />
            </div>

            {/* button */}
            <button className="relative flex items-center text-white font-IBMPlex text-lg mt-[-30%] gap-4 border border-black border-opacity-60 border-r-2 border-b-2 r p-2 px-7 z-10 shadow-2xl ">
              <span>
                <SlArrowDown className="w-4 h-4 text-white" />
              </span>
              محصولات
            </button>
          </div>

          {/* main image */}
          <img
            src={P1}
            alt="1"
            className="h-full w-auto object-contain lg:mr-16 mr-56 z-0   "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
