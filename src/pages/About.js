import React, { useEffect } from "react";
import AboutFour from "../components/about/AboutFour";
import AboutOne from "../components/about/AboutOne";
import AboutThree from "../components/about/AboutThree";
import AboutTwo from "../components/about/AboutTwo";
import AboutBanner from "../components/banner/AboutBanner";
import Footer from "../components/footer/Footer";

const About = () => {
  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0 });
    };
  }, []);

  return (
    <>
      <AboutBanner />
      <AboutOne />
      <AboutTwo />
      <AboutThree />
      <AboutFour />
      <Footer />
    </>
  );
};

export default About;
