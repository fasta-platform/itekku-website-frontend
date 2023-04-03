import React from "react";

const HomeFive = () => {
  return (
    <div className="HomeFive">
      <h4>
        <b>Our partners</b>{" "}
      </h4>
      <div className="HomeFiveImage">
        <img src={require("../../assets/img/partner1.png")} alt="itekku" />
        <img src={require("../../assets/img/partner2.png")} alt="itekku" />
      </div>
    </div>
  );
};

export default HomeFive;
