import { useState } from "react";

import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { NavBar } from "./components";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
