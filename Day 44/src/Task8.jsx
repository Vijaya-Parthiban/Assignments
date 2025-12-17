import React, { useState } from "react";

export default function Task8() {
  const [showUsers, setShowUsers] = useState(false);

  const users = [
    { id: 1, name: "Aarav", age: 22 },
    { id: 2, name: "Neha", age: 25 },
    { id: 3, name: "Rahul", age: 28 }
  ];

  return (
    <div>
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      {showUsers && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} years old
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}