import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import About from "../components/About";
import Work from "../components/Work";
import Stages from "../components/Stages";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="grd overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Stages />
      <div className="mrg">
      <Contact />
      </div>
    </div>
  );
};

export default Index;
