import React, { useEffect, useState } from "react";
import "./PageNumberInput.css";

function PageNumerInput({ currentNumber, maxNumber, onNumberChanged }) {
  const [number, setNumber] = useState(currentNumber);
  useEffect(() => {
    setNumber(currentNumber);
  }, [currentNumber]);

  const handleNumberChanged = (e) => {
    const value = e.target.valueAsNumber;
    console.log("value:" + value);
    onNumberChanged(value);
  };

  const handleInputChanged = (e) => {
    const value = e.target.valueAsNumber;
    const lastValue = Math.min(Math.max(value, 1), maxNumber);
    setNumber(lastValue);
  };

  return (
    <input
      className="custom-input"
      type="number"
      defaultValue="1"
      value={number}
      onChange={handleInputChanged}
      onBlur={handleNumberChanged}
    />
  );
}
export default PageNumerInput;
