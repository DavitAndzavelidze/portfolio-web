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
import { motion } from "framer-motion";
import { topToBottom, leftToRight, rightToLeft } from "../utils/motion";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen flex flex-col justify-center items-center gap-[20px] relative md:items-start  lg:ml-[0px] md:ml-[2rem] "
      >
        <motion.div
          variants={topToBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-center items-start w-[280px] md:w-full lg:items-center lg:mx-auto z-20"
        >
          <div className="flex flex-col justify-center items-start">
            <p className="text-[14px] md:text-[20px] lg:text-[17px] text-[--green]  fontFira ">
              Hi there! I'm
            </p>
            <h1 className="text-[30px] md:text-[50px] lg:text-[70px] lg:font-[900] text-[--textWhite] font-bold">
              Davit Andzavelidze
            </h1>
            <p className="text-[--textLight] md:text-[30px] font-[400]">
              I'm{" "}
              <p className="inline bg-white text-gray-500 font-bold px-2 rounded-lg">
                <p className="text-purple-600 inline"> o</p>doo
              </p>{" "}
              developer based in Tbilisi, Georgia
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
                  <button className="py-[10px] px-4 pr-[25px] md:pr-[2.5rem] rounded-[10px] text-[16px] md:text-[20px] fontFira text-[--green] border border-[--purple] shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:bg-[--greenTint] lg:duration-150">
                    Scroll
                  </button>
                </Link>
                <div className="absolute top-0 mr-[6px] right-0 mt-[16px] text-[20px] md:text-[30px] md:mr-[10px] md:mt-[18px] z-[-1]">
                  <BsArrowDownShort className="download-btn animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <ParticlesContainer />
      </div>

      <motion.div
        variants={leftToRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden lg:fixed left-0 bottom-0 lg:z-30 text-[--textLight] lg:flex lg:flex-col lg:text-[25px] lg:gap-[1rem] lg:ml-[2rem] lg:after:content-[''] lg:after:w-[1px] lg:after:h-[90px] lg:after:block lg:after:bg-[--green] lg:after:mx-auto lg:cursor-pointer"
      >
        <div className="lg:hover:text-[--lightPurple] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
          <a href="https://github.com/DavitAndzavelidze" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
        <div className="lg:hover:text-[--lightPurple] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
          <a
            href="https://www.instagram.com/davidandzavelidze/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="lg:hover:text-[--lightPurple] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
          <a href="https://twitter.com/davit212121" target="_blank">
            <CiTwitter />
          </a>
        </div>
        <div className="lg:hover:text-[--lightPurple] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
          <a
            href="https://www.linkedin.com/in/davit-andzavelidze-246a69197/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="lg:hover:text-[--lightPurple] lg:duration-200 lg:hover:translate-y-[-5px] lg:p-[10px]">
          <a href="https://codepen.io/davitandzavelidze" target="_blank">
            <AiOutlineCodepen />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={rightToLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden lg:fixed right-0 bottom-0 lg:z-30 text-[--textLight] lg:flex lg:flex-col lg:after:content-[''] lg:after:w-[1px] lg:after:h-[90px] lg:after:block lg:after:bg-[--green] lg:mr-[2rem] lg:after:mx-auto lg:gap-[2rem] lg:mt-[3rem]"
      >
        <h2 className="verticalMode lg:cursor-pointer lg:hover:text-[--lightPurple] lg:duration-200 fontFira">
          <a href="mailto:dandzavelidze@gmail.com">dandzavelidze@gmail.com</a>
        </h2>
      </motion.div>
    </>
  );
}
