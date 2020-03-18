import React from "react";
// import { render } from "react-dom/cjs/react-dom.production.min";

const IdCard = ({ lastName, firstName, gender, height, birth }) => {
  return (
    <div>
      First name: {firstName}
      Last name: {lastName}
      Gender: {gender}
      Height{height}
      Birth: {birth}
    </div>
  );
};

export default IdCard;
