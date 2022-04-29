import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
const Navagation = () => {
  return (
    <div className="nav-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/options">
        Dance Options
      </Link>
      <Link className="link" to="/instrutors">
        Instructors
      </Link>
    </div>
  );
};

export default Navagation;
