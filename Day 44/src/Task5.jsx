import React, { useState } from "react";

export default function Task5() {
  const [showItems, setShowItems] = useState(false);
  const items = []; // try adding values like ["Apple", "Banana"]

  return (
    <div>
      <button onClick={() => setShowItems(!showItems)}>
        {showItems ? "Hide Items" : "Show Items"}
      </button>

      {showItems && (
        <>
          {items.length === 0 && <h2>No Data Available</h2>}

          {items.length > 0 && (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}