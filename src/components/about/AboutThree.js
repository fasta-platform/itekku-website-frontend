import React from "react";

const AboutThree = () => {
  const contents = [
    {
      id: 1,
      title: "Customer First",
      desc: "We put customers first in all we do",
    },
    {
      id: 2,
      title: "People",
      desc: "Our People are our most valuable asset",
    },
    {
      id: 3,
      title: "Value-add",
      desc: "We build value-add into all products",
    },
    {
      id: 4,
      title: "Service Excellence",
      desc: "We always look for ways to enhance customer experience",
    },
  ];

  const contentItem = (item) => {
    return (
      <div className="aboutThreeGridItem" key={item?.id}>
        <div className="aboutThreeGridItemNumber">
          <span>{item?.id}</span>
        </div>
        <div className="aboutThreeGridItemContent">
          <h5>{item?.title}</h5>
          <p>{item?.desc}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="aboutThree">
      <h3>
        Our <span className="grayColor">Values</span>
      </h3>

      <div className="aboutThreeGrid">
        {contents && contents?.map((item) => contentItem(item))}
      </div>
    </div>
  );
};

export default AboutThree;
