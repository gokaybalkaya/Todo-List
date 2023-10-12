import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <i
              className="fas fa-trash"
              onClick={() => handleDeleteTodo(index)}
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;