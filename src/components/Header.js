import React from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <div className="navbar-menu">
              <a className="navbar-brand" href="#">Logo</a>
              <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Services</a>
              <a href="/">Contact</a>
            </div>
          </nav>
        </header>
      );
}
