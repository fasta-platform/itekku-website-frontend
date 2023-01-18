import React, { useEffect } from "react";
import { addFixNav } from "./helpers/customFunctions";
import MyRouter from "./routes/MyRouter";

const App = () => {
  useEffect(() => {
    addFixNav();
  }, []);
  return <MyRouter />;
};

export default App;
