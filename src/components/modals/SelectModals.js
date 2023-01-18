import React, { useEffect, useState } from "react";

const SelectModals = ({
  status,
  data,
  setVisiblityStatus,
  handleSelected,
  selectedItem,
}) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setVisiblityStatus(false);
  };

  const toggleModal = () => {
    if (status === true) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  useEffect(() => {
    toggleModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    showModal === true && (
      <div className="select_modals">
        <div
          className="select_modals_overlay"
          onClick={() => closeModal()}
        ></div>
        <div className="select_modals_cards">
          <div className="select_modals_body">
            {data && data?.length
              ? data?.map((item, i) => (
                  <div
                    className="selectModalitem"
                    key={i}
                    onClick={() => handleSelected(item)}
                  >
                    <div className="selectModalitemLeft">
                      {item?.img ? (
                        <img src={item?.img} alt="itekku" />
                      ) : (
                        <div> </div>
                      )}

                      <p>{item?.title}</p>
                    </div>

                    <div
                      className={`checkDiv  ${
                        selectedItem?.title?.toLowerCase() ===
                        item?.title?.toLowerCase()
                          ? "selectedItem"
                          : ""
                      }`}
                    >
                      <i className="fa fa-check"></i>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    )
  );
};

export default SelectModals;
