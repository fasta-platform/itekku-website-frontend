import React from "react";

const CustomButtonImage = ({ handleClick, text, imageSrc, dark = true }) => {
  return (
    <button
      className={`${dark === true ? "fasta_button" : "fasta_button_light"}`}
      onClick={() => handleClick(dark)}
    >
      <span className="button_group">
        <span>{text}</span>
        <img style={{ width: 18 }} src={imageSrc} alt="itekku" />
      </span>
    </button>
  );
};

export default CustomButtonImage;
