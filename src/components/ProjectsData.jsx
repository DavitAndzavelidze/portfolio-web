import Organick from "../assets/organick.png";
import Weather from "../assets/weather.png";
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
    image: [Weather],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://weather-22.netlify.app/",
    githubCode: "https://github.com/DavitAndzavelidze/WeatherAPI",
    websiteTitle: "Weather",
    siteInfo: `The weather website built using an API provides accurate and real-time weather data to users.`,
    buildIn: `HTML CSS JavaScript API`,
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
