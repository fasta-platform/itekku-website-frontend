import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutFour from "../components/about/AboutFour";
import AboutOne from "../components/about/AboutOne";
import AboutThree from "../components/about/AboutThree";
import AboutTwo from "../components/about/AboutTwo";
import AboutBanner from "../components/banner/AboutBanner";
import Footer from "../components/footer/Footer";
import { setCurrentPageName } from "../store/authSlice/authSlice";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageName("About"));
    return () => {
      window.scrollTo({ top: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
