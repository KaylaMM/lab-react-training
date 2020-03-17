import React from "react";

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: "black solid",
    height: "30%",
    width: "50%"
  };
  return <div style={divStyle}> Kayla </div>;
};

export default BoxColor;
