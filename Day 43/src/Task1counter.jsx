import React, { useState } from "react";
export default function Task1counter() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h1>Count increase and decrease</h1>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
      <h2>Count: {Count}</h2>
    </div>
  );
}