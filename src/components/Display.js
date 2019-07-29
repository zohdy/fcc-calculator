import React, { useEffect, useState } from "react";
import "./Display.css";

export default function Display({
  currentValue,
  operand,
  result,
  operatorValue
}) {
  const [blink, setBlink] = useState(false);
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

  useEffect(() => {
    setBlink(true);
    const timer = setTimeout(() => {
      setBlink(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [operatorValue, result]);

  return (
    <div className="Display" id="display">
      <span className={blink ? "blink" : ""}>{changeDispayField()}</span>
    </div>
  );
}
