import React, { useState } from "react";
import "../Button/Button.css";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

const Button = ({ show, setCount }) => {
  const [count, localSetCount] = useState(0);

  function handleClick(e) {
    localSetCount(e);
    setCount(e);
  }

  return (
    <div className="ButtonDiv"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="SButtonDiv">
        {[1, 2, 3, 4, 5].map((e) => (
          <button
            className={`Btn${count === e ? "Active" : ""}`}
            key={e}
            onClick={() => handleClick(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <SubmitBtn count={count} show={show} />
    </div>
  );
};

export default Button;
