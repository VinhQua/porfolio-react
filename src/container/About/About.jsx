import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { client } from "../../client";
import { useEffect, useState } from "react";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.getEntries({
          content_type: "abouts",
        });

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

export default AppWrap(About, "about");
