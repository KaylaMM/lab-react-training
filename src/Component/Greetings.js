import React from "react";
// import { render } from "react-dom/cjs/react-dom.production.min";

const Greetings = ({ lang, name }) => {
  let greet = "";
  if (lang === "fr") {
    greet = "Bonjour";
  } else {
    greet = "Halo";
  }
  return (
    <div>
      {greet} {name}
    </div>
  );
};

export default Greetings;
