import { Link } from "react-router";
import { useState } from "react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(true)}>
        ☰ Topics
      </button>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          X
        </button>

        <h2>Topics</h2>
        <Link to="/topics/coding">Coding</Link>
        <Link to="/topics/cooking">Cooking</Link>
        <Link to="/topics/football">Football</Link>
      </div>
    </>
  );
}
