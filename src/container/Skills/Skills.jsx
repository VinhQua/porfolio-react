import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import "./Skills.scss";
const Skills = () => {
  const [experience, setexperience] = useState([]);
  const [skills, setskills] = useState([]);
  //fetch Skills
  useEffect(() => {
    const fetchSkillsEx = async () => {
      try {
        const skillsData = await client.getEntries({ content_type: "skills" });
        // const expData = await client.getEntries({ content_type: "experience" });
        const skills = skillsData.items.map((item) => {
          const { name, bgColor, icon } = item.fields;
          const imgUrl = icon?.fields?.file?.url;
          return { name, bgColor, icon: imgUrl };
        });
        setskills(skills);
        // const experience = expData.items.map((item) => {
        //   const { title, description, image, projectLink, codeLink, tag } =
        //     item.fields;
        //   const imgUrl = image?.fields?.file?.url;
        //   return { title, description, imgUrl, projectLink, tag, codeLink };
        // });
        // console.log(skills);
        // console.log(experience);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkillsEx();
  }, []);
  return (
    <>
      <h2 className="head-text">Skill & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.works?.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>
              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.desc}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
