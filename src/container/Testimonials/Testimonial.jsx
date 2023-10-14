import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await client.getEntries({
          content_type: "testimonials",
        });
        const { items: brandData } = await client.getEntries({
          content_type: "brands",
        });

        const testimonials = items.map((item) => {
          const { name, imageurl, feedback, company } = item.fields;
          const imgUrl = imageurl?.fields?.file?.url;
          return { name, imgUrl, feedback, company };
        });
        setTestimonials(testimonials);
        // console.log(testimonials);
        const brands = brandData.map((item) => {
          const { name, image } = item.fields;
          const imgUrl = image?.fields?.file?.url;
          return { name, imgUrl };
        });
        // console.log(brands);
        setBrands(brands);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const test = testimonials?.[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          {/* <div className="app__testimonial-item app__flex">
            <img src={test?.imgUrl} alt="testimonials" />
            <div className="app__testimonial-content">
              <p className="p-text">{test?.feedback}</p>
              <div>
                <h4 className="bold-text">{test?.name}</h4>
                <h5 className="bold-text">{test?.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div> */}

          <div className="app__testimonial-brands app__flex">
            {brands.map((brand) => {
              return (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, type: "tween" }}
                  key={brand.id}
                >
                  <img src={brand.imgUrl} alt={brand.name} />
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default AppWrap(Testimonial, "testimonials", "app__primarybg");
