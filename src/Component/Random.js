import React from "react";
// import { render } from "react-dom/cjs/react-dom.production.min";

const Random = ({ min, max }) => {
  let value = Math.floor(Math.random() * max) + min;

  return (
    <div>
      Random value between {min} and {max} => {value}
    </div>
  );
};

export default Random;
