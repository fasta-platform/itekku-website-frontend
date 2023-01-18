import React from "react";

const ContactAddressDetails = () => {
  const addressDetails = [
    {
      id: 1,
      title: "Address ",
      desc: "Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria ",
    },
    {
      id: 2,
      title: "Email",
      desc: "Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria",
    },
    {
      id: 3,
      title: "Phone ",
      desc: "Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria",
    },
    {
      id: 4,
      title: "Offices",
      desc: "Horizon 1 Lekki Gardens, 235 Kusenla Road, Lekki, Nigeria",
    },
  ];
  return (
    <div className="contactAddressDetails">
      <div className="contactAddressDetailsGrid">
        {addressDetails?.map((item, i) => (
          <div key={i} className="contactAddressDetailsGridItem">
            <h4>{item?.title}</h4>
            <p>{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAddressDetails;
