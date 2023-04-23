import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {nav ? (
          <div className="bg-black/80 w-full h-full fixed top-0 left-0 z-[10] md:hidden"></div>
        ) : (
          ""
        )}
        <div>
          <div className="w-full items-center px-[14px] lg:px-[36px] flex justify-between h-[64px] bg-transparent lg:h-[76px] absolute z-[100]">
            <div className="text-[32px] items-center md:text-[20px] flex gap-[10px]">
              <img className="w-[50px]" src={Logo} alt="Company Logo" />
            </div>
            <div onClick={handleNav}>
              {!nav ? (
                <RxHamburgerMenu
                  size="30px"
                  color="#64ffda"
                  className="md:hidden cursor-pointer"
                />
              ) : (
                <RxCross2
                  color="#64ffda"
                  size="30px"
                  className="absolute top-0 right-0 mt-[15px] mr-[15px] cursor-pointer z-[100] md:hidden"
                />
              )}
            </div>
            <ul className="hidden md:flex md:items-center md:text-[18px] md:space-x-6 text-[--textWhite] md:fontFira">
              <li className="navlink nav-item">
                <button>Home</button>
              </li>
              <li className="navlink nav-item">
                <button>About</button>
              </li>
              <li className="navlink nav-item">
                <button>Projects</button>
              </li>

              <li className="navlink nav-item">
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <ul
            className={
              nav
                ? `fixed top-0 right-0 z-[50] w-[70%] font-bold text-[22px] text-center duration-300 md:hidden`
                : `fixed top-0 right-[-100%] z-50 w-full font-bold text-[22px] text-center duration-300 md:hidden overflow-hidden`
            }
          >
            <div className="flex flex-col justify-center gap-[20px] h-screen md:flex  py-[1.5rem] md:mt-[0px] text-[--textWhite] text-[22px] items-left w-full bg-[--mobileBg] md:h-full z-50">
              <li className="navlinkm" onClick={handleNav}>
                Home
              </li>
              <li className="navlinkm" onClick={handleNav}>
                About
              </li>

              <li className="navlinkm" onClick={handleNav}>
                Projects
              </li>
              <li className="navlinkm" onClick={handleNav}>
                Contact
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
