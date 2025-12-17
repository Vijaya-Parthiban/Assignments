import React, { useState } from "react";

export default function Task6todolist() {
  const [todos, setTodos] = useState(false);
  const items = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice map()" },
    { id: 3, text: "Build a Todo App" }
  ];

  return (
    <div>
      <button onClick={() => setTodos(!todos)}>{todos ? "Hide Todos" : "Show Todos"}</button>

      {todos && (
        <>
          {items.length === 0 && <h2>No Data Available</h2>}

          {items.length > 0 && (
            <ul>
              {items.map((item, index) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}