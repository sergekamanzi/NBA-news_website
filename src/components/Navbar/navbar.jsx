import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    onLogout();
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>Sport <span>News</span></h2>
      </div>

      <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='links'>
        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/updates" onClick={handleLinkClick}>New & Updates</Link></li>
          <li><Link to="/event" onClick={handleLinkClick}>Statistics</Link></li>
        </ul>
      </div>

      <div className='btn'>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;