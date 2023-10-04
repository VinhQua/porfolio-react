import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Quang</h1>
            </div>
          </div>
          <div className="tag-cmp story app_flex">
            {/* <p className="p-text">
              I'm a Web Developer specializing in creating responsive, dynamic
              websites and user-friendly UIs for diverse clients that support
              business growth and drive marketing efforts.
            </p> */}
            <p className="p-text">
              {" "}
              I'm an English teacher and love working with kids and teenagers. I
              enjoy carrying out my unique teaching approaches which result in
              the improvement of my students ' learning performance. As a
              result, the number of students at my center grows so rapidly that
              Therefore, I have made a decision to become a full stack Web
              Developer specialized in E-commerce and Web apps to delevelop my app
              using MERN and PERN Stack.
            </p>
            <p className="p-text">
              When not working, I enjoy traveling and singing with my guitar
              🎸🎸🎸
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      ></motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.node, images.mongoDB].map((image, i) => {
          return (
            <div key={`circle-${i}`} className="circle-cmp app__flex">
              <img src={image} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
