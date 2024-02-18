import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './navbar.module.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [menuIcon, setMenuIcon] = useState('menu');

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    setMenuIcon(showSidebar ? 'close' : 'menu');
  }, [showSidebar]);

  return (
    <div className={Style.nav}>
      <ul className={Style.navbar}>
        <li><Link onClick={closeSidebar} to="/">David.</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a onClick={toggleSidebar}>
            {menuIcon === 'menu' ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            )}
          </a>
        </li>
      </ul>
      <ul className={`${Style.sidebar} ${showSidebar ? Style.showSidebar : ''}`}>
        <li onClick={closeSidebar}><Link to="/about">About</Link></li>
        <li onClick={closeSidebar}><Link to="/work">Work</Link></li>
        <li onClick={closeSidebar}><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
