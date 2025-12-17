import React, { useState } from "react";

export default function Task4() {
  const [showCities, setShowCities] = useState(false);

  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Bengaluru" },
    { id: 5, name: "Hyderabad" }
  ];

  return (
    <div>
      <button onClick={() => setShowCities(!showCities)}>
        {showCities ? "Hide Cities" : "Show Cities"}
      </button>

      {showCities && (
        <>
          <h2>City List</h2>
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}