import React, { useState } from "react";
import "./navbar.css";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNav] = useState(false);

  return (
    <nav className="navbar d-flex">
      <h1 className="navbar__title">bedanth.</h1>
      <ul className="navbar__list">
        <li>
          <UseAnimations
            animation={menu2}
            onClick={() => {
              setIsMobileNav((prev) => !prev);
            }}
            size={28}
            strokeColor="white"
            wrapperStyle={{ zIndex: 2000, position: "relative", cursor: "pointer" }}
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
          <a href="#events">Projects</a>
        </li>
        <li>
          <a href="#events">Blogs</a>
        </li>
      </ul>
    </nav>
  );
}
