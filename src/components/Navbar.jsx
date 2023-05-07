import { useState } from "react";
import { Link } from "react-scroll";
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
      <nav id="navbar">
        {nav ? (
          <div className="bg-black/80 w-full h-full fixed top-0 left-0 z-[50] md:hidden"></div>
        ) : (
          ""
        )}
        <div>
          <div className="w-full items-center px-[14px] lg:px-[36px] flex justify-between h-[60px]  lg:h-[76px] fixed z-[100] bg-[--bgNaviLight]">
            <div className="text-[32px] items-center md:text-[20px] flex gap-[10px]">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="w-[50px]" src={Logo} alt="Company Logo" />
              </Link>
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
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="navlink nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="navlink nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="navlink nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact
                </Link>
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
            <ul className="flex flex-col justify-center gap-[20px] h-screen md:flex  py-[1.5rem] md:mt-[0px] text-[--textWhite] text-[22px] items-left w-full bg-[--mobileBg] md:h-full z-50">
              <li className="navlinkm">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNav}
                >
                  Home
                </Link>
              </li>
              <li className="navlinkm">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNav}
                >
                  Projects
                </Link>
              </li>

              <li className="navlinkm">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNav}
                >
                  About
                </Link>
              </li>
              <li className="navlinkm">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
