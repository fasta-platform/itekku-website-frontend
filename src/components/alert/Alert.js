import React, { useEffect, useState } from "react";

const Alert = ({ status, icon, message, closeStatus }) => {
  const [alertStatus, setalertStatus] = useState(status);

  useEffect(() => {
    setalertStatus(status);

    if (status === true) {
      setTimeout(() => {
        setalertStatus(false);
        closeStatus(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    alertStatus === true && (
      <div className="alertPOPUp">
        <div className="alertPOPUp_wrapper">
          {icon && <i className={icon}></i>}

          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default Alert;
