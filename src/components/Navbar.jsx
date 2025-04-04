import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SlQuestion } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import ProductsDropdown from "./ProductsDropdown";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close mobile nav if clicked outside
      if (nav && navRef.current && !navRef.current.contains(e.target)) {
        setNav(false);
      }

      // Close products dropdown if clicked outside
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav, open]);

  return (
    <div className="relative">
      <div className="text-white flex justify-between items-center mx-auto h-14 px-4 text-1 fixed w-full backdrop-blur-sm border-b border-gray-800 z-40">
        <h1 className="text-3xl font-bold primary-color ml-4">WE.</h1>

        <ul className="hidden md:flex md:mx-auto font-IBMPlex">
          <li className="p-5">
            <a href="#Home">صفحه اصلی</a>
          </li>
          <li
            onMouseEnter={() => setOpen(true)}
            className="p-5 flex flex-row-reverse items-center gap-1 relative"
          >
            <a href="#Projects">محصولات</a>
            <span>
              <SlArrowDown className="w-3 h-3 text-white" />
            </span>

            {/* Dropdown container with ref */}
            <div ref={dropdownRef} onMouseLeave={() => setOpen(false)}>
              {open && (
                <div className="absolute top-full left-0 w-64 z-50">
                  <ProductsDropdown />
                </div>
              )}
            </div>
          </li>

          <li className="p-5">
            <a href="#Blog">بلاگ</a>
          </li>
          <li className="p-5">
            <a href="#About">درباره ما</a>
          </li>
        </ul>

        <div className="md:flex">
          <SlQuestion className="w-6 h-6 text-white hidden md:flex mr-6" />
        </div>

        <div onClick={() => setNav(!nav)} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={navRef}
        className={
          nav
            ? "text-white md:hidden fixed h-full left-0 top-0 w-[50%] border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] ease-out duration-100"
        }
      >
        <ul className="p-8 text-xl mt-12">
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#Home">صفحه اصلی</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#Projects">محصولات</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#Blog">بلاگ</a>
          </li>
          <li className="p-2" onClick={() => setNav(false)}>
            <a href="#About">درباره ما</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
