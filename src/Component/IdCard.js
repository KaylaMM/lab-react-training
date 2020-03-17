import React from "react";
// import { render } from "react-dom/cjs/react-dom.production.min";

const IdCard = ({ lastName, firstName, gender, height, picture }) => {
  return (
    <div>
      {lastName} {firstName} {gender} {height} {picture}
    </div>
  );
};

export default IdCard;
