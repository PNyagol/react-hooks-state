import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={incrementCount}>I have been clicked {count} times</button>;
}

export default Counter;
