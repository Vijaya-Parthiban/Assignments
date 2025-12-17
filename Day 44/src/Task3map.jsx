import React, { useState } from "react";

export default function Task3Map() {
  const cities = ["Chennai", "Mumbai", "Delhi", "Bengaluru", "Hyderabad"];
  const [showCities, setShowCities] = useState(false);

  return (
    <div>
      <button onClick={() => setShowCities(!showCities)}>
        {showCities ? "Hide Cities" : "Show Cities"}
      </button>

      {showCities && (
        <>
          <h2>City List</h2>
          <ul>
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}