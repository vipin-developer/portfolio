import React from "react";
import "./Main.css";
import { Element, Link } from "react-scroll";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";

const Main = () => {
  return (
    <div>
      <header className="header">
        <div className="header-right">
          {/* Place your header items here */}
          <Link to="page1" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
          <Link to="page2" spy={true} smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
          <Link to="page3" spy={true} smooth={true} offset={-70} duration={500}>
            Experience
          </Link>
          <Link to="page4" spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
        </div>
      </header>

      <Element name="page1">
        <Home />
      </Element>
      <Element name="page2">
        <Skills />
      </Element>
      <Element name="page3">
        <Experience />
      </Element>
      <Element name="page4">
        <Contact />
      </Element>
    </div>
  );
};
export default Main;
