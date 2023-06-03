import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import "./Work.scss";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(() => {
          return works.filter((work) => work.tag === item);
        });
      }
    }, 500);
  };
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const { items } = await client.getEntries({ content_type: "works" });
        const works = items.map((item) => {
          const { title, description, image, projectLink, codeLink, tag } =
            item.fields;
          const imgUrl = image?.fields?.file?.url;
          return { title, description, imgUrl, projectLink, tag, codeLink };
        });
        setWorks(works);
        setFilterWork(works);
        // console.log(works);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorks();
  }, []);
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["React", "NodeJs", "HTML && CSS", "E-Commerce", "All"].map(
          (item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app_flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            );
          }
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    staggerChildren: 0.5,
                    ease: "easeInOut",
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                        staggerChildren: 0.5,
                        ease: "easeInOut",
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                        staggerChildren: 0.5,
                        ease: "easeInOut",
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tag}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
