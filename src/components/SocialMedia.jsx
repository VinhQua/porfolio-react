import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/VinhQua"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/vinhquafrontenddeveloper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:vinhqua.io@gmail.com">
          <AiFillMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
