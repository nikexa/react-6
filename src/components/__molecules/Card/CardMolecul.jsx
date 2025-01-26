import React from "react";
import "../Card/CardMolecul.css";
import Text from "../../__atoms/Text/Text";
import Star from "../../__atoms/Star/Star";
import Button from "../../__atoms/Button/Button";

const CardMolecul = ({ show, setCount }) => {
  return (
    <div className="CardMoleculDiv">
      <div className="ForPosition">
        <Star />
        <Text />
        <Button show={show} setCount={setCount} />
      </div>
    </div>
  );
};

export default CardMolecul;
