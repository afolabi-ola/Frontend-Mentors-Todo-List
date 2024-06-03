import React from "react";
import "../styles/App.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [userTodos, setUserTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text: userInput,
      completed: false,
    };

    setUserTodos((userTodos) => [...userTodos, newTodo]);
    setUserInput("");
  };

  return (
    <div className="app-container">
      <Header />
      <TodoInput
        onAddTodo={handleAddTodo}
        userInput={userInput}
        onInput={setUserInput}
      />
      <TodoList userTodos={userTodos} setUserTodos={setUserTodos} />
    </div>
  );
}

export default App;
