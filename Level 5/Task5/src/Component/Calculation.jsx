import React, { useState } from "react";

const Calculation = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (num) => {
    setInput((prev) => prev + num);
  };

  const handleOperatorClick = (op) => {
    if (input === "") return;
    setPreviousValue(input);
    setOperator(op);
    setInput("");
  };

  const handleEqualsClick = () => {
    if (!operator || input === "") return;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(input);

    let calculation;
    switch (operator) {
      case "+":
        calculation = num1 + num2;
        break;
      case "-":
        calculation = num1 - num2;
        break;
      case "*":
        calculation = num1 * num2;
        break;
      case "/":
        calculation = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }

    setResult(calculation);
    setInput(calculation.toString());
    setOperator(null);
    setPreviousValue("");
  };

  const handleClearClick = () => {
    setInput("");
    setOperator(null);
    setPreviousValue("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">{result || input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClearClick} className="clear">C</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqualsClick} className="equals">=</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        {[9,8,7].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("/")}>/</button>
        {[6,5,4].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick("*")}>*</button>
        {[3,2,1].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        
      </div>
    </div>
  );
};

export default Calculation;
