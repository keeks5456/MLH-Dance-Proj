import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav-container">
      <Link className="link" to="/">
        <p className="nav-link">Home</p>
      </Link>
      <Link className="link" to="/about">
        <p className="nav-link">About</p>
      </Link>
      <Link className="link" to="/options">
        <p className="nav-link">Dance Options</p>
      </Link>
      <Link className="link" to="/instructors">
        <p className="nav-link">Instructors</p>
      </Link>
    </div>
  );
};

export default Navigation;
