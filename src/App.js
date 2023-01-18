import React, { useEffect } from "react";
import SumarryModal from "./components/modals/SumarryModal";
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
    </>
  );
};

export default App;
