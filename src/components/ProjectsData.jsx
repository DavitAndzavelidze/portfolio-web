import Organick from "../assets/organick.png";
import Twins from "../assets/twins.webp";
import MayMakine from "../assets/maycapitalmakine.png";
import Movies from "../assets/movies.png";
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
    siteInfo: `This mini game is a simple yet fun game where players need to flip over cards and match the identical ones. This game is great for improving memory, concentration, and visual recognition skills.`,
    buildIn: `React Tailwind CSS`,
  },
  {
    id: 2,
    image: [MayMakine],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://maycapitalmakine.com/",
    githubCode: "https://github.com/DavitAndzavelidze/maycapitalm",
    websiteTitle: "MayCapitalMakine",
    siteInfo: `The website can provide information about company, including their qualifications and experience.`,
    buildIn: `React Tailwind CSS`,
  },
  {
    id: 3,
    image: [Movies],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://davitandzavelidze.github.io/MovieAPI/",
    githubCode: "https://github.com/DavitAndzavelidze/MovieAPI",
    websiteTitle: "Movies",
    siteInfo: `A movie website built by API provides a comprehensive database of movies. It contains ratings and movie information`,
    buildIn: `HTML CSS JavaScript API`,
  },
];
