import React, { useEffect } from "react";
import HomeTopBanner from "../components/banner/HomeTopBanner";
import Footer from "../components/footer/Footer";
import HomeFour from "../components/home/HomeFour";
import HomeOne from "../components/home/HomeOne";
import HomeThree from "../components/home/HomeThree";
import HomeTwo from "../components/home/HomeTwo";

const Home = () => {
  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0 });
    };
  }, []);

  return (
    <>
      <HomeTopBanner />
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <Footer />
    </>
  );
};

export default Home;
