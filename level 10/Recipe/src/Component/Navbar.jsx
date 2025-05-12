import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${query}`);
    setQuery("");
  };

  return (
    <nav className="navbar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="category-links">
        <NavLink to="/cuisine/italian">Italian</NavLink>
        <NavLink to="/cuisine/american">American</NavLink>
        <NavLink to="/cuisine/thai">Thai</NavLink>
        <NavLink to="/cuisine/indian">Indian</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;