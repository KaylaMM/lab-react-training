import React, { Component } from "react";
import IdCard from "./Component/IdCard";
import Greetings from "./Component/Greetings";
import Random from "./Component/Random";
import BoxColor from "./Component/BoxColor";

class App extends Component {
  render() {
    console.log("app mounted");
    return (
      <div className="App">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          // birth={new Date("1992-07-14")}
        />
        <img
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt="doe-john"
        ></img>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          // birth={new Date("1988-05-11")}
        />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="delores-obrien"
        ></img>
        <h1>Greetings</h1>
        <Greetings lang="de" name="Ludwig" />
        <Greetings lang="fr" name="François" />
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}

export default App;
