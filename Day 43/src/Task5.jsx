import react, { useState } from "react"; 
import { useEffect } from "react";
export default function Task5() {
    const [change, onChange] = useState("white");
    const changecolor = () => {
        onChange("pink");
    }
    useEffect(() => {
    document.body.style.backgroundColor = change;
  }, [change]);
    return ( 
    <div>
      <button onClick={changecolor}>change background color</button>
      <button onClick={() => onChange("white")}>reset background color</button>
    </div>
  );
}