import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import { useForm } from "@formspree/react";
import axios from "axios";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formState, handleSubmit] = useForm("xvonjkld");
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:vinhqua.io@gmail.com" className="p-text">
            vinhqua.io@gmail.com
          </a>
        </div>

        {/* <div className="app___footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:vinhqua.io@gmail.com" className="p-text">
            vinhqua.io@gmail.com
          </a>
        </div> */}
        {!formState.succeeded ? (
          <form onSubmit={handleSubmit} className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
                className="p-text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
                className="p-text"
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                id="message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={formState.submitting}
              className="p-text"
            >
              {formState.submitting ? "Loading" : "Send Message"}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};
export default AppWrap(Footer, "contact", "app__whitebg");
