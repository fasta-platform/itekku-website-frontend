import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeTopBanner from "../components/banner/HomeTopBanner";
import Footer from "../components/footer/Footer";
import HomeFour from "../components/home/HomeFour";
import HomeOne from "../components/home/HomeOne";
import HomeThree from "../components/home/HomeThree";
import HomeTwo from "../components/home/HomeTwo";
import { setCurrentPageName } from "../store/authSlice/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageName("Home"));
    return () => {
      window.scrollTo({ top: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
