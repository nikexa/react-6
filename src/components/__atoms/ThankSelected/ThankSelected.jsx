import React from "react";
import "./ThankSelected.css";

const ThankSelected = ({ count }) => {
  return (
    <div className="ThankSelectedDiv">
      <p>You selected {count} out of 5</p>
    </div>
  );
};

export default ThankSelected;
