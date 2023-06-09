import React, { useState } from "react";
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";

import { motion } from "framer-motion";
import { navLinks } from "../../data";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item, index) => {
          return (
            <li className="app__flex p-text" key={`${item} -${index}`}>
              <div>
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map(
                (item, index) => {
                  return (
                    <li
                      className="app__flex p-text"
                      key={`${item} -${index}`}
                      onClick={() => setToggle(false)}
                    >
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
