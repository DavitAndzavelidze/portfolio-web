import Organick from "../assets/organick.webp";
import Twins from "../assets/twins.webp";
import Movies from "../assets/movies.webp";
import Offroad from "../assets/offroad.webp";
import Lidya from "../assets/lidya.webp";
import myracha from "../assets/myracha.webp";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export const ProjectsData = [
  {
    id: 0,
    image: [Organick],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://organick-plants.netlify.app/",
    githubCode: "https://github.com/DavitAndzavelidze/organick-app",
    websiteTitle: "Organick",
    siteInfo: `Agricultural website build in Vite React and Tailwind CSS. It's single page application use react router. Fully responsive for any devices.`,
    buildIn: `React Tailwind CSS`,
  },
  {
    id: 1,
    image: [Twins],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://twins21.netlify.app/",
    githubCode: "https://github.com/DavitAndzavelidze/twins",
    websiteTitle: "Twins",
    siteInfo: `This mini game is a simple yet fun game where players need to flip over cards and match the identical ones.`,
    buildIn: `React Tailwind CSS`,
  },

  {
    id: 2,
    image: [Movies],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://davitandzavelidze.github.io/MovieAPI/",
    githubCode: "https://github.com/DavitAndzavelidze/MovieAPI",
    websiteTitle: "Movies",
    siteInfo: `A movie website built by API provides a comprehensive database of movies. It contains ratings and movie information`,
    buildIn: `HTML CSS JavaScript API`,
  },
  {
    id: 3,
    image: [Offroad],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://offroad.vercel.app/",
    githubCode: "https://github.com/DavitAndzavelidze/offroad",
    websiteTitle: "Offroad",
    siteInfo: `This is a landing website dedicated to offroad adventures, constructed using Next.js and Tailwind CSS, featuring engaging animations powered by Framer Motion.`,
    buildIn: `Next JS Tailwind CSS Framer Motion`,
  },
  {
    id: 4,
    image: [Lidya],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://lidyanet.com/",
    githubCode: "https://github.com/DavitAndzavelidze/lidya",
    websiteTitle: "Lidya",
    siteInfo: `The website can provide information about construction company, including their qualifications, contacts and experience.`,
    buildIn: `Next JS Tailwind CSS Framer Motion`,
  },
  {
    id: 5,
    image: [myracha],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://www.myracha.ge/",
    websiteTitle: "Myracha",
    siteInfo: `The site is intended for people who want to travel to Racha. Find the desired cottage, family hotel or guest house and spend an unforgettable time.`,
    buildIn: `Odoo Website Builder`,
  },
];
