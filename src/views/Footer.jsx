import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-[1rem] w-[260px] md:w-[300px] mx-auto fontFira mt-[6rem] text-center my-[2rem] text-[--textLight]">
        <div className="flex justify-center items-center gap-[20px] text-[20px] text-[--textLight] md:text-[25px] lg:relative lg:z-[100]">
          <a href="https://github.com/DavitAndzavelidze" target="_blank">
            <AiOutlineGithub className="lg:hover:text-[--lightPurple] lg:duration-150" />
          </a>
          <a
            href="https://www.instagram.com/davidandzavelidze/"
            target="_blank"
          >
            <AiOutlineInstagram className="lg:hover:text-[--lightPurple] lg:duration-150" />
          </a>
          <a href="https://twitter.com/davit212121" target="_blank">
            <CiTwitter className="lg:hover:text-[--lightPurple] lg:duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/davit-andzavelidze-246a69197/"
            target="_blank"
          >
            <FiLinkedin className="lg:hover:text-[--lightPurple] lg:duration-150" />
          </a>
          <a href="https://codepen.io/davitandzavelidze" target="_blank">
            <AiOutlineCodepen className="lg:hover:text-[--lightPurple] lg:duration-150" />
          </a>
        </div>
        <div>
          <p className="text-[12px] md:text-[14px]">
            Design Inspiration by Brittany Chiang. Built by Davit Andzavelidze
          </p>
        </div>
      </div>
    </>
  );
}
