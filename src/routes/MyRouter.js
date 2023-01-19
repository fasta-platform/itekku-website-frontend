import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OAuthLayout from "../layout/OAuthLayout";
import About from "../pages/About";
import CartPage from "../pages/CartPage";
import Contact from "../pages/Contact";
import DeliveryCalculator from "../pages/DeliveryCalculator";
import Home from "../pages/Home";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<OAuthLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/calculator" exact element={<DeliveryCalculator />} />
          <Route path="/cart" exact element={<CartPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
