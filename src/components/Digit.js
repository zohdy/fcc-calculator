import React from "react";
import "./Digit.css";

export default function Digit({
  value,
  id,
  updateValue,
  performOperation,
  operation
}) {
  const handleClick = (e) => {
    let clicked = e.target.value;

    if (operation) {
      performOperation(clicked);
    } else {
      updateValue(clicked);
    }
  };

  return (
    <button className="Digit" value={value} id={id} onClick={handleClick}>
      {value}
    </button>
  );
}
