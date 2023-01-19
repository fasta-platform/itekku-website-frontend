import React from "react";
import { useDispatch } from "react-redux";
import { setSummaryModal } from "../../store/authSlice/authSlice";

const CartItem = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(
          setSummaryModal({
            status: true,
            payload: null,
          })
        )
      }
    >
      <div className="removeItemCart">
        <i class="bx bx-x"></i>
      </div>
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
            <h6>From</h6>
            <h4>Computer village ikeja</h4>
            <br />
          </div>
        </div>

        <div className="fasta_step_distance">
          <img src={require("../../assets/img/vector/motorbike.png")} alt="" />

          <span>2km </span>
        </div>

        <div className="fasta_step ">
          <div className="fasta_step_v-stepper">
            <div className="fasta_step_circle">
              <img
                src={require("../../assets/img/vector/location-end.png")}
                alt=""
              />
            </div>
            <div className="fasta_step_line"></div>
          </div>

          <div className="fasta_step_content">
            <h6>To</h6>
            <h4>Ade drive,Ogudu GRA</h4>
          </div>
        </div>
      </div>
      <div className="cart_costDiv">
        <div className="cart_cost">
          <span>Cost:</span>
          <span>N900 - N1200</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
