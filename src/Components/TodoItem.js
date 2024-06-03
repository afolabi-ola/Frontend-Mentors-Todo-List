import React, { useState } from "react";
import "../styles/TodoItem.css";

function TodoItem({
  todo,
  onToggleCompleted,
  onDelete,
  setIsTextActive,
}) {
  const [isActive, setIsActive] = useState(false);
  const handleHoverEffect = () => {
    setIsActive(true);
    setIsTextActive(true);
  };
  const handleNotHoverEffect = () => {
    setIsActive(false);
    setIsTextActive(false);
  };
  return (
    <div
      className="item-container"
      onMouseEnter={handleHoverEffect}
      onMouseLeave={handleNotHoverEffect}
    >
      <div className="check-list">
        <div>
          <input
            type="checkbox"
            id="customCheckbox"
            onClick={() => onToggleCompleted(todo.id)}
            className="able-checkbox"
          />
        </div>
        <span className={`text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      {isActive && (
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          <img src="/images/icon-cross.svg" alt="icon-cross" />
        </button>
      )}
    </div>
  );
}

export default TodoItem;
