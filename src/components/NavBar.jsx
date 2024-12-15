import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-menu">
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              MAIN PAGE
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className={active === "menu" ? "active" : ""}
              onClick={() => setActive("menu")}
            >
              FLAVOURS
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={active === "blog" ? "active" : ""}
              onClick={() => setActive("blog")}
            >
              SHOP
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
