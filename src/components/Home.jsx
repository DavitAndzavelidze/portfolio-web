import { Link } from "react-scroll";
import { BsArrowDownShort } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import "../app.css";
import ParticlesContainer from "./ParticlesContainer";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen flex flex-col justify-center items-center gap-[20px] relative md:items-start  lg:ml-[0px] md:ml-[2rem] "
      >
        <div className="flex flex-col justify-center items-start w-[280px] md:w-full lg:items-center lg:mx-auto">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[14px] md:text-[20px] lg:text-[17px] text-[--green]  fontFira ">
              Hi there! I'm
            </p>
            <h1 className="text-[30px] md:text-[50px] lg:text-[70px] lg:font-[900] text-[--textWhite] font-bold">
              Davit Andzavelidze
            </h1>
            <p className="text-[--textLight] md:text-[30px] font-[400]">
              I'm React Developer based in Tbilisi, Georgia
            </p>

            <div className="flex lg:items-center lg:mx-auto mt-[1rem] w-[280px] gap-[1rem] lg:w-full">
              <div className="relative z-[50]">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <button className="py-[1rem] pr-[20px] md:pr-[25px] w-[180px] rounded-[10px] text-[18px] md:text-[20px] fontFira text-[--green] border border-[--green] shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:bg-[--greenTint] lg:duration-150 ">
                    Scroll
                  </button>
                </Link>
                <div className="absolute top-0 right-0 mr-[35px] mt-[20px] text-[20px] md:text-[30px] md:mr-[30px] md:mt-[18px] z-[-1]">
                  <BsArrowDownShort className="download-btn animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ParticlesContainer />
      </div>
      <div className="lg:fixed lg:left-0 lg:bottom-0 lg:flex lg:justify-between lg:items-center lg:w-full lg:text-[--textLight] hidden z-30">
        <div className="lg:flex lg:flex-col lg:text-[25px] lg:gap-[1rem] lg:ml-[2rem] lg:after:content-[''] lg:after:w-[1px] lg:after:h-[90px] lg:after:block lg:after:bg-[--green] lg:after:mx-auto lg:cursor-pointer">
          <div className="lg:hover:text-[--green] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
            <a href="https://github.com/DavitAndzavelidze" target="_blank">
              <AiOutlineGithub />
            </a>
          </div>
          <div className="lg:hover:text-[--green] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
            <a
              href="https://www.instagram.com/davidandzavelidze/"
              target="_blank"
            >
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="lg:hover:text-[--green] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
            <a href="https://twitter.com/davit212121" target="_blank">
              <CiTwitter />
            </a>
          </div>
          <div className="lg:hover:text-[--green] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
            <a
              href="https://www.linkedin.com/in/davit-andzavelidze-246a69197/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </div>
          <div className="lg:hover:text-[--green] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
            <a href="https://codepen.io/davitandzavelidze" target="_blank">
              <AiOutlineCodepen />
            </a>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:after:content-[''] lg:after:w-[1px] lg:after:h-[90px] lg:after:block lg:after:bg-[--green] lg:mr-[2rem] lg:after:mx-auto lg:gap-[2rem] lg:mt-[3rem]">
          <h2 className="verticalMode lg:cursor-pointer lg:hover:text-[--green] lg:duration-200 fontFira">
            <a href="mailto:dandzavelidze@gmail.com">dandzavelidze@gmail.com</a>
          </h2>
        </div>
      </div>
    </>
  );
}
