import React, { useState } from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

function TodoList({ userTodos, setUserTodos }) {
  const [activeBtn, setActiveBtn] = useState("All");
  const [isTextActive, setIsTextActive] = useState(false);

  let currentList = userTodos;

  switch (activeBtn) {
    case "All":
      currentList = userTodos;
      break;
    case "Completed":
      currentList = userTodos.slice().sort((a, b) => a.completed - b.completed);
      break;

    default:
      currentList = userTodos;
  }

  const handleIsCompleted = (id) => {
    setUserTodos((userTodos) =>
      userTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )
    );
  };

  const handleDelete = (id) => {
    setUserTodos((userTodos) => userTodos.filter((todo) => todo.id !== id));
  };
  const handleClearCompleted = () => {
    setUserTodos((userTodos) =>
      userTodos.filter((todo) => todo.completed === false)
    );
  };

  return (
    <div className="list-container">
      {currentList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={handleIsCompleted}
          onDelete={handleDelete}
          isTextActive={isTextActive}
          setIsTextActive={setIsTextActive}
        />
      ))}
      <Footer
        userTodos={userTodos}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        onClear={handleClearCompleted}
        isTextActive={isTextActive}
      />
    </div>
  );
}

export default TodoList;
