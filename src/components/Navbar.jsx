import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Eligify
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/questionnaire">Check Eligibility</Link>
          <Link to="/saved-schemes">Saved Schemes</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;