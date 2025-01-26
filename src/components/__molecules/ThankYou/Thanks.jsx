import React from "react";
import ThanksIMG from "../../__atoms/ThanksIMG/ThanksIMG";
import ThankSelected from "../../__atoms/ThankSelected/ThankSelected";
import ThanksText from "../../__atoms/ThanksText/ThanksText";
import "./Thanks.css";

const Thanks = ({ count }) => {
  return (
    <div className="ThanksDiv">
      <ThanksIMG />
      <ThankSelected count={count} />
      <ThanksText />
    </div>
  );
};

export default Thanks;
