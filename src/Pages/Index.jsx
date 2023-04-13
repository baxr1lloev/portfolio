import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Stages from "../components/Stages";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Stages />
      <Contact />
    </div>
  );
};

export default Index;
