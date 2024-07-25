import React from "react";
import "./NavBar.css"; // Assuming you have a separate CSS file for styling

const NavBar = () => {
  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="logo">
          <h1>HB</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#awards">Awards & Certificates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="leave-note">Talk-Me</button>
      </div>
    </div>
  );
};

export default NavBar;
