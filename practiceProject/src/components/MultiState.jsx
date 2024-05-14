import { useState } from "react";

export default function MultiState() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decrementIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1> Count value is:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1> We are incrementing value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decrementIncrement}>Decrease Increament</button>
    </div>
  );
}
