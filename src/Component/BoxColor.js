import React from "react";

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: "black solid",
    fontSize: "150%",
    margin: "5%",
    // color: "white",
    padding: "5%",
    height: "20%",
    width: "40%",
    textAlign: "center"
  };
  return <div style={divStyle}> {divStyle.backgroundColor} </div>;
};

export default BoxColor;
