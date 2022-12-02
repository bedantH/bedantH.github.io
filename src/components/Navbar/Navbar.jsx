import React, { useState } from "react";
import "./navbar.css";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNav] = useState(false);

  return (
    <nav className="navbar d-flex">
      <h1 className="navbar__title">bedanth.</h1>
      <ul className="navbar__list">
        <li>
          <UseAnimations
            animation={menu4}
            onClick={() => {
              setIsMobileNav((prev) => !prev);
            }}
            size={28}
            strokeColor="white"
            wrapperStyle={{
              zIndex: 2000,
              position: "relative",
              cursor: "pointer",
            }}
          />
        </li>
      </ul>
      <ul
        className={`mobile__nav ${
          isMobileNavOpen ? "mobile__nav--show" : "mobile__nav--hide"
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Work Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
