import React, { useEffect, useState } from 'react';
import "./homePage.css";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="home-wrapper">
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
          <div className="small-screens">
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
                  <img
                    src="/images/close.png"
                    alt="close"
                    className="close-btn"
                  />
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
          </div>
          {/* STYLING FOR BIGGER SCREENS!!!!!!! */}
          <nav className="large-screens">
            <div className="logo-wrapper">
              <img
                src="/images/plumbing-logo.png"
                alt="Logo"
                className="logo-large"
              />
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
          <p className="header">Kelownas finest</p>
          <h1 className="body-text">Industrial and Commercial Plumbing Services</h1>
        </div>
      </div>
      <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default HomePage;
