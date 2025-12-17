import React, { useState } from "react";

export default function Task5() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <br /><br />

      {confirmPassword && (
        <p style={{ color: isMatch ? "green" : "red" }}>
          {isMatch ? "Passwords Match " : "Passwords Do Not Match "}
        </p>
      )}
    </div>
  );
}
