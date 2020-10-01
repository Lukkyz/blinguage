import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img
          className="navbar-logo"
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="jd"
        />
        <ul className="navbar-link">
          <li>Courses</li>
          <li>Why Us</li>
          <li>Support</li>
          <li>
            <button>Get Started</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
