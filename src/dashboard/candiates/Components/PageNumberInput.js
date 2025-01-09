import React, { useEffect, useState } from "react";
import "./PageNumberInput.css";

function PageNumerInput({ currentNumber, maxNumber, onNumberChanged }) {
  const [number, setNumber] = useState(currentNumber);
  useEffect(() => {
    setNumber(currentNumber);
  }, [currentNumber]);

  const handleInputBlur = (e) => {
    const value = e.target.valueAsNumber;
    onNumberChanged(value);
  };

  const handleInputChanged = (e) => {
    const value = e.target.valueAsNumber;
    console.log("blur value:" + value);
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
      onBlur={handleInputBlur}
    />
  );
}
export default PageNumerInput;
