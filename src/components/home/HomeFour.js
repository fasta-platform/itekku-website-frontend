import React from "react";

const HomeFour = () => {
  return (
    <div className="HomeFour" id="ItekkuForBusiness">
      <div className="HomeFourLeft">
        {/* <img src={require("../../assets/img/africanman.png")} alt="itekku" /> */}
      </div>
      <div className="HomeFourRight">
        <h5>
          We Would <span className="grayColor">Love </span> to Know you more
        </h5>
        <p>
          Please take a minute to fill the form below so that we can tailor our
          service to your business needs
        </p>

        <form className="itekku_form">
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Your Full Name:</label>
              <input type="text" placeholder="e.g Praise Wiliams " />
            </div>
            <div className="form-group">
              <label htmlFor="">Your Business Name:</label>
              <input type="text" placeholder="e.g Cre8tivnerd Limited " />
            </div>
          </div>
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Phone No:</label>
              <div className="form-phone">
                <select>
                  <option value="NG">NG</option>
                  <option value="GH">GH</option>
                  <option value="US">US</option>
                  <option value="TZ">TZ</option>
                </select>
                <div className="form-phone-input">
                  <div className="form-phone-input-code">+234</div>
                  <input type="text" placeholder="e.g Praise Wiliams " />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input type="email" placeholder="tyewilliams213@gmail.com" />
            </div>
          </div>
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Business Location:</label>
              <select>
                <option value="Lekki - Lagos ">Lekki - Lagos </option>
                <option value="Lekki - Lagos ">Lekki - Lagos </option>
                <option value="Lekki - Lagos ">Lekki - Lagos </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Business Size:</label>
              <select>
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
              </select>
            </div>
          </div>

          <div>
            <div
              className="form-group"
              style={{ marginTop: 80, marginBottom: 60 }}
            >
              <button
                style={{
                  paddingLeft: 60,
                  paddingRight: 60,
                  width: 300,
                }}
                className="fasta_outline_button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeFour;
