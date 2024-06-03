import React from "react";
import "../styles/Footer.css";

function Footer({ userTodos, activeBtn, setActiveBtn, onClear, isTextActive }) {
  const numItems = userTodos.length === 1 ? `item` : `items`;
  return (
    <footer className="footer-container">
      <span>
        {userTodos.length > 0
          ? `${userTodos.length} ${numItems} left`
          : `Begin Adding Task 💪`}
      </span>
      <div>
        <button
          className="filter-button"
          onClick={(e) => setActiveBtn(e.target.textContent)}
          id={activeBtn === "All" ? "active-filter-btn" : ""}
        >
          All
        </button>
        <button
          className="filter-button"
          id={isTextActive ? "active-btn" : ""}
        >
          Active
        </button>
        <button
          className="filter-button"
          onClick={(e) => setActiveBtn(e.target.textContent)}
          id={activeBtn === "Completed" ? "active-filter-btn" : ""}
        >
          Completed
        </button>
      </div>
      <button className="clear-button" onClick={onClear}>
        Clear Completed
      </button>
    </footer>
  );
}

export default Footer;
