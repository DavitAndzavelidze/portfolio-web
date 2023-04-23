import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Projects from "./views/Projects.jsx";

// import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      //   {
      //     path: "*",
      //     element: <NotFound />,
      //   },
    ],
  },
]);
export default router;
