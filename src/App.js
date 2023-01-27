import React, { useEffect } from "react";
import SumarryModal from "./components/modals/SumarryModal";
import PageLoading from "./components/loading/pageLoading/PageLoading";
import { addFixNav } from "./helpers/customFunctions";
import MyRouter from "./routes/MyRouter";
import { setWhatsappNumber } from "./store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    addFixNav();
    getWhatsappNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWhatsappNumber = () => {
    fetch(`${process.env.REACT_APP_BASEURL}/whatsapp-number`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch(setWhatsappNumber(response?.message?.replace(/\s/g, "")));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SumarryModal />
      <MyRouter />
      <PageLoading />
    </>
  );
};

export default App;
