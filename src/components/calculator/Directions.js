import React from "react";

const Directions = () => {
  // const dispatch = useDispatch();

  // onClick={() =>
  //   dispatch(
  //     setSummaryModal({
  //       status: true,
  //       payload: null,
  //     })
  //   )
  // }

  return (
    <div>
      <div className="summary_box_step">
        <div className="fasta_step">
          <div className="fasta_step_v-stepper">
            <div className="fasta_step_circle">
              <img
                src={require("../../assets/img/vector/circle-black.png")}
                alt=""
              />
            </div>
            <div className="fasta_step_line"></div>
          </div>

          <div className="fasta_step_content">
            <h4>Pickup Point :</h4>
            <div className="fasta_step_content_items">
              <div className="form-group">
                <div className="form-phone-input ">
                  <div className="form-phone-input-code">
                    Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>

        {/* <div className="fasta_step_distance">
          <img src={require("../../assets/img/vector/motorbike.png")} alt="" />

          <span>2km </span>
        </div> */}

        <div className="fasta_step ">
          <div className="fasta_step_v-stepper">
            <div className="fasta_step_circle">
              <img
                src={require("../../assets/img/vector/location-yellow.png")}
                alt=""
              />
            </div>
            <div className="fasta_step_line"></div>
          </div>

          <div className="fasta_step_content">
            {/* <h6>To</h6> */}
            <h4>Delivery Point :</h4>
            <div className="fasta_step_content_items">
              <div className="form-group">
                <div className="form-phone-input ">
                  <div className="form-phone-input-code">
                    Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria
                  </div>
                </div>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="">Receiver’s Whatsapp Number:</label>
                <div className="form-phone-input ">
                  <div className="form-phone-input-code">0810000 0000</div>
                </div>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="">Item : </label>
                <div className="form-phone-input ">
                  <div className="form-phone-input-code">Microwave</div>
                </div>
              </div>
              <div className="form-group mt-4">
                <div
                  className="form-phone-input "
                  style={{
                    position: "relative",
                    display: "block",

                    paddingTop: 10,
                    height: "unset",
                    paddingBottom: 1,
                  }}
                >
                  <div className="removeItemCart" style={{ top: 10 }}>
                    <div className="cart_costDiv">
                      <div className="cart_cost">
                        <span>Cost:</span>
                        <span>N900 - N1200</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" mb-3"
                    style={{
                      color: "#5A5A5A",
                      fontSize: 13,
                    }}
                  >
                    To
                  </div>
                  <label htmlFor="">Mobil road ilaje lagos</label>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      className=""
                      style={{
                        color: "#7E7E7E",
                        fontSize: 13,
                      }}
                    >
                      08169031092
                    </div>
                    <label
                      htmlFor=""
                      style={{
                        fontSize: 13,
                      }}
                    >
                      Phone
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
