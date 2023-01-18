import React from "react";

const AboutFour = () => {
  return (
    <div className="aboutFour">
      <div className="aboutFourGrid">
        <div className="aboutFourGridLeft">
          <h5>
            Ready to take your <span className="grayColor">career</span> to the
            next level?
          </h5>
          <p>
            Our we have a cutting edge delivery service that ensures goods gets
            delivered to you in no more than 50 mins after you’ve made your
            orders, at a cheaper rate compared to what you’ve experienced in the
            past
          </p>

          <div className="" style={{ marginTop: 50, marginBottom: 60 }}>
            <button
              style={{ paddingLeft: 60, paddingRight: 60 }}
              className="fasta_outline_button borderDark"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="aboutFourGridRight">
          <img
            className=""
            src={require("../../assets/img/diversecouple.png")}
            alt="itekku"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
