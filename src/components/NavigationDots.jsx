import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => {
        return (
          <a
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { background: "#313BAC" } : {}}
            href={`#${item}`}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
