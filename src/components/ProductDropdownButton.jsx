import { MdKeyboardArrowLeft } from "react-icons/md";

function ProductDropdownButton({ children }) {
  const buttonClasses =
    "flex items-center justify-between gap-1 rounded-lg w-52 hover:bg-gray-800/75 hover:border hover:backdrop-blur-lg border-black/75 transition duration-200 ease-in-out hover:scale-105 pr-2";
  return (
    <>
      <li className="flex items-center justify-end  ">
        <button className={buttonClasses}>
          <span>
            <MdKeyboardArrowLeft />
          </span>
          {children}
        </button>
      </li>
    </>
  );
}

export default ProductDropdownButton;
