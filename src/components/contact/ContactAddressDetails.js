import React from "react";

const ContactAddressDetails = () => {
  const addressDetails = [
    {
      id: 1,
      title: "Address ",
      desc: "3a Dotun Jolaosho Close, off Allen Avenue, Ikeja Lagos",
    },
    {
      id: 2,
      title: "Email",
      desc: "info@itekku.ng",
    },
    {
      id: 3,
      title: "Phone ",
      desc: "+234 (913)-700-0318",
    },
    {
      id: 4,
      title: "Offices",
      desc: "Lagos Nigeria",
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
