import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSummaryModal } from "../../store/authSlice/authSlice";

const SumarryModal = ({ status }) => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.oauth.summaryModal);

  const closeModal = () => {
    dispatch(
      setSummaryModal({
        status: false,
        payload: null,
      })
    );
  };

  return (
    modal?.status === true && (
      <div className="select_modals">
        <div
          className="select_modals_overlay"
          onClick={() => closeModal()}
        ></div>
        <div className="select_modals_cards">
          <div className="select_modals_body">
            <h4 className="modalTitle">Order Summary</h4>

            <div className="summaryItem">
              <div className="cartCompRightCardItems">
                <h5>Items</h5>
                <h3>Bone Straight, Shower cap</h3>
              </div>
              <div className="cartCompRightCardItems">
                <h5>Order No</h5>
                <h3>#17856GB</h3>
              </div>
              <div className="cartCompRightCardItems">
                <h5>Pickup point</h5>
                <h3>Computer Village Ikeja</h3>
              </div>
              <div className="cartCompRightCardItems">
                <h5>Delivery Point</h5>
                <h3>Ogudu GRA</h3>
              </div>
              <div className="cartCompRightCardItems">
                <h5>Cost</h5>
                <h3>NGN 900 - 1200</h3>
              </div>
            </div>

            <div className="summary_actions">
              <div className="summary_actions_item">
                <img
                  className="HomeTwoLeftImg3"
                  src={require("../../assets/img/vector/edit.png")}
                  alt="itekku"
                />
                <p>Edit</p>
              </div>
              <div className="summary_actions_item">
                <img
                  className="HomeTwoLeftImg3"
                  src={require("../../assets/img/vector/delete.png")}
                  alt="itekku"
                />
                <p>Delete </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SumarryModal;
