import React from "react";

const AboutThree = () => {
  const contents = [
    {
      id: 1,
      title: "Customer First",
      desc: "Put customers before everything else",
    },
    {
      id: 2,
      title: "Move Fast ",
      desc: "Put customers before everything else.",
    },
    {
      id: 3,
      title: "Strength is ME + YOU",
      desc: "Together we are stronger than alone ",
    },
    {
      id: 4,
      title: "Innovate",
      desc: "We are always looking for way to either change the game or improve the game",
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
