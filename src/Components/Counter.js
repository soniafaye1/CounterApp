import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementByOne() {
    setCount(count + 1);
  }

  function decrementByOne() {
    setCount(count - 1);
  }

  return (
    <div className="d-flex justify-content-center">
      <Button handleClick={incrementByOne} sign="+" />
      <div className="h3">{count}</div>
      <Button handleClick={decrementByOne} sign="-" />
    </div>
  );
}

export default Counter;
