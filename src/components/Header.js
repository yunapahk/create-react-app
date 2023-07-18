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
    
              <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </nav>
        </header>
      );
}


