import react, { useState } from "react";
export default function Task2() {
    const [name, setName] = useState("");
  return (
    <div>
        <input type="text" value = {name} onChange={e => setName(e.target.value)} placeholder="Enter your name..." />
        <p>hello: {name}</p>
    </div>
  )}