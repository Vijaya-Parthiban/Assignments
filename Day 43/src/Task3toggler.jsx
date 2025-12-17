import react, { useState } from "react";
export default function Task3toggler() {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
        <button onClick={() => setIsToggled(!isToggled)}>{isToggled ? "ON" : "OFF"}</button>
        <p>{isToggled ? "The Button says OFF" : "The Button says ON"}</p>
    </div>
  )}