import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { client } from "../../client";
import { useEffect, useState } from "react";
//yputo0fje3wl
//xtgVOw_Hz94krkTm629gYYdSC7K8fAHXGlWyUfabr5w
// const about = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a good web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a good web developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "MERN Stack",
//     description: "I am a good web developer",
//     imgUrl: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.getEntries({
          content_type: "abouts",
        });
        console.log(res);
        const abouts = res.items.map((item) => {
          const { title, imgUrl, detail } = item.fields;
          const imageurl = imgUrl?.fields?.file?.url;
          return { title, description: detail, imgUrl: imageurl };
        });
        setAbouts(abouts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((item, index) => {
          return (
            <motion.div
              key={`profile-${index}`}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
            >
              <img src={item.imgUrl} alt={item.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {item.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default About;
