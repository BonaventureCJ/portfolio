// src/components/NavBar.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { ThemeContext } from './Contexts';
import { FaLaptopCode } from 'react-icons/fa';
import { LuSunMoon,  LuMoonStar  } from "react-icons/lu";


const navItems = [
  { path: '/', icon: <FaLaptopCode className="portfolio-home-icon" />, name: 'BCJ' },
  { path: '/skills', name: 'Skills' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const NavBar = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="primary-nav" id="primary-nav">
      <nav className="primary-nav__nav">
        <ul className="primary-nav__ul">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `link-highlight primary-nav__a ${isActive ? 'active-link' : ''}`
                }
              >
                {item.icon ? (
                  <span className="link-content">
                    {item.icon}
                  </span>
                ) : (
                  item.name
                )}
              </NavLink>
            </li>
          ))}
          <li className="theme-toggle">
            <button
              className="theme-button"
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
            >
              {theme === 'light' ? <LuMoonStar /> : <LuSunMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;