import React, { useState } from "react";
import "./homePage.css";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="home-wrapper">
      <div
        className="image-container"
        style={{
          backgroundImage: "url(/images/plumber.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

      <nav className="nav-wrapper">
        <div className="nav-content-wrapper">
          <div className="logo-wrapper">
            <img
              src="/images/plumbing-logo.png"
              alt="Your Logo"
              className="logo"
            />
          </div>
          <div className="menu-wrapper" onClick={toggleMenu}>
            <img src="/images/menu-new.png" className="menu" alt="menu" />
          </div>
        </div>
        <div className={`slide-in-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="close-btn-wrapper">
            <button className="close-btn" onClick={toggleMenu}>
              <img src="/images/close.png" alt="close" className="close-btn" />
            </button>
          </div>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* STYLING FOR BIGGER SCREENS!!!!!!! */}
        <nav className="nav-bar-large">
          <div className="logo-wrapper">
            <img src="/images/plumbing-logo.png" alt="Logo" className="logo" />
          </div>
          <div className="menu-wrapper">
            <ul>
              <li>
                <a href="/home" className="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="page">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="page">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="page">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
      <div className="text-content-wrapper">
        <h1 className="header">PLUMBING & PLUMBING CO</h1>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
