import { useState } from "react";
export default function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const excrement = () => {
    setValue(value + 10);
  };
  const dexcrement = () => {
    setValue(value - 10);
  };
  return (
    <div className="counter">
      <h1>{value}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={excrement}>+10x</button>
      <button onClick={dexcrement}>-10x</button>
    </div>
  );
}
