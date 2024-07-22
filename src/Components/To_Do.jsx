import React, { useState } from "react";

function To_Do() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function removeTodo(index) {
    const updatedArray = todos.filter((_, i) => i !== index);
    setTodos(updatedArray);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          className="border rounded w-[20%] outline-none h-10 shadow-lg"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="border pt-2 pb-2 pr-2 pl-2 ml-5 bg-blue-500 rounded text-white"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className="border w-[40%] flex justify-between p-2 m-3 rounded"
            key={index}
          >
            {todo}
            <button
              onClick={() => removeTodo(index)}
              className="border bg-red-600 rounded p-1 ml-10 text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default To_Do;
