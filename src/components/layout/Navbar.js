import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb03 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {" "}
          {branding}{" "}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home mr-1" />
                Home
              </Link>
            </li>

            <li>
              <Link to="/contacts/add" className="nav-link">
                <i className="fas fa-plus mr-1" />
                Add Contact
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                <i className="fas fa-question mr-1" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  branding: "My Application"
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Navbar;
