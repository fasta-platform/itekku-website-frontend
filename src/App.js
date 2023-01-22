import React, { useEffect } from "react";
import SumarryModal from "./components/modals/SumarryModal";
import PageLoading from "./components/loading/pageLoading/PageLoading";
import { addFixNav } from "./helpers/customFunctions";
import MyRouter from "./routes/MyRouter";

const App = () => {
  useEffect(() => {
    addFixNav();
  }, []);
  return (
    <>
      <SumarryModal />
      <MyRouter />
      <PageLoading />
    </>
  );
};

export default App;
