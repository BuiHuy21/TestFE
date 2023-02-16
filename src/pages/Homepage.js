import React from "react";
import Banner from "../components/Banner";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Intro />
      <Slider />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Homepage;
