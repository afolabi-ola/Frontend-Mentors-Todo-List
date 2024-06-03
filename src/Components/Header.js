import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header-container">
      <h1 className="title">TODO</h1>
      <div className="icon">
        <img src="./images/icon-sun.svg" alt="icon" />
      </div>
    </header>
  );
}

export default Header;
