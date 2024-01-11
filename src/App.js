import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getCurrentPathname = () => {
    return window.location.pathname;
  };

  const pathname = getCurrentPathname();

  const headerLinks = [
    { route: "/", label: "Home" },
    { route: "/about", label: "About" },
    { route: "/contact", label: "Contact" },
  ];

  return (
    <>
       <header className="header-style">
        <h1>Simple Webpage</h1>
      </header>
      <nav className={`nav-style ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {headerLinks.map((navLink) => {
            const isActive = pathname === navLink.route;
            return (
              <li
                key={navLink.route}
                className={`${isActive && "text-primary-500"
                  } flex-center p-medium-16`}
              >
                <a href={navLink.route}>{navLink.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="main-style">
        <h2>Main Content Area</h2> <br />
        <p>This is the main content of the webpage.</p>
      </main>
      <footer className="footer-style">
        <p>&copy; 2024 Simple Webpage. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
