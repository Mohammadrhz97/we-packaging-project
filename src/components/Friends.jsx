import P3 from "../assets/3.png";

function Friends() {
  return (
    <div className="bg-black flex items-center justify-center flex-col pt-28">
      <h1 className="text-gray-400 font-IBMPlex font-bold text-2xl">
        دوستان ما
      </h1>
      <div className="max-w-[1024px]">
        <div className=" grid grid-cols-3 grid-rows-3 max-w-[700px] h-[250px]">
          <img src={P3} alt="" className="col-start-2 col-span-2" />
          <img src={P3} alt="" className="col-start-4 col-span-3" />
          <img src={P3} alt="" className="col-start-1 row-start-2 col-span-3" />
          <img src={P3} alt="" className="col-start-3 row-start-2 col-span-3" />
          <img src={P3} alt="" className="col-start-6 row-start-2 col-span-3" />
          <img src={P3} alt="" className="col-start-2 row-start-3 col-span-2" />
          <img src={P3} alt="" className="col-start-4 row-start-3 col-span-3" />
        </div>
      </div>
    </div>
  );
}

export default Friends;
