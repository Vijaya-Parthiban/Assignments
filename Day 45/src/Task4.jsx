import React, { useState } from "react";

export default function Task4() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>

      <h3>Selected Country: {country}</h3>
    </div>
  );
}
