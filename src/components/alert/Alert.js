import React from "react";

const Alert = ({ status, icon, message }) => {
  return (
    status === true && (
      <div className="alertPOPUp">
        <div className="alertPOPUp_wrapper">
          <i className={icon}></i>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default Alert;
