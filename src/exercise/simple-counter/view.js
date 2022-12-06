import React, { useState } from "react";
import "./styles.css";
import "../styles.css";

const View = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = (number) => {
    console.log(counter, number);
    setCounter(counter + number);
  };

  const handleDecrease = () => {
    handleCount(-1);
  };

  const handleIncrease = () => {
    handleCount(+1);
  };

  return (
    <div className="simple-counter exercise">
      <button onClick={handleDecrease}>
        Decrease
      </button>
      <div className="counter">
        {counter}
      </div>
      <button onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default View;
