import React, { useState } from "react";
import "./App.css";
import Digit from "./components/Digit";
import Display from "./components/Display";
import { digits } from "./data/digits";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [operatorValue, setOperatorValue] = useState("");
  const [result, setResult] = useState("");
  const [operand, setOperand] = useState("");

  const updateValue = (val) => {
    if (val === "." && currentValue.includes(".")) {
      setCurrentValue(currentValue);
    } else {
      let appendDigits = currentValue + val;
      // Prevent leading zeros
      if (appendDigits.charAt(0) === "0") {
        appendDigits = appendDigits.slice(1);
      }
      setCurrentValue(appendDigits);
    }
  };

  const performOperation = (val) => {
    if (val === "=") {
      calculate();
    } else if (val === "AC") {
      clearDisplayField();
    } else if (val === "-" && currentValue.length === 0) {
      setCurrentValue(val + currentValue);
    } else if (currentValue === "-" && operand) {
      setOperatorValue(val);
      setCurrentValue("");
    } else {
      setOperatorValue(val);
      calculate();
    }
  };

  const calculate = () => {
    if (currentValue && operand) {
      let operationResult;
      let value1 = parseFloat(currentValue);
      let value2 = parseFloat(operand);

      switch (operatorValue) {
        case "+":
          operationResult = value2 + value1;
          break;
        case "-":
          operationResult = value2 - value1;
          break;
        case "*":
          operationResult = value2 * value1;
          break;
        case "/":
          operationResult = value2 / value1;
          break;
        default:
          return;
      }
      setCurrentValue("");
      setResult(operationResult);
      setOperand(operationResult);
    } else if (currentValue === "-") {
      setOperand("");
    } else if (currentValue) {
      setOperand(currentValue);
      setCurrentValue("");
    }
  };

  const clearDisplayField = () => {
    setResult("");
    setCurrentValue("");
    setOperand("");
    setOperatorValue("");
  };

  return (
    <div className="App">
      <Display
        currentValue={currentValue}
        operand={operand}
        result={result}
        operatorValue={operatorValue}
      />
      <div className="calculator">
        {digits.map((digit) => {
          return (
            <Digit
              key={digit.id}
              id={digit.id}
              value={digit.value}
              updateValue={updateValue}
              performOperation={performOperation}
              operation={digit.operation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
