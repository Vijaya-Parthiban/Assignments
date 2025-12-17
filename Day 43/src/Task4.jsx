import React, { useState } from "react";
export default function Task4() {
    const [number, setNumber] = useState(0);
  return (
    <div>
      <input type="number" placeholder="enter a number" value={number} onChange={e => setNumber(e.target.value)}/>
        <p>this number is {number % 2 === 0 ? "Even" : "Odd"}</p>
    </div>
  );
}