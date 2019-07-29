import React from "react";
import "./Display.css";

export default function Display({ currentValue, operand, result }) {
  const changeDispayField = () => {
    if (result.toString()) {
      return result;
    } else if (currentValue.toString()) {
      return currentValue;
    } else if (operand.toString()) {
      return operand;
    } else {
      return "0";
    }
  };

  return (
    <div className="Display" id="display">
      <span>{changeDispayField()}</span>
    </div>
  );
}
