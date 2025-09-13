import React from 'react';
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from './Contexts';

const Header = () => {
  // Date and Time:
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true  // Added hour12 option
  }));
  
  const [date, setDate] = useState(() => {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return currentDate.toLocaleDateString([], options);
  });

  const changeTimeAndDate = () => {
    const newTime = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true  // Added hour12 option
    });
    const newDate = new Date().toLocaleDateString([], { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    setTime(newTime);
    setDate(newDate);
  };

  useEffect(() => {
    const intervalId = setInterval(changeTimeAndDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="header__section" id='header'>
      <span><button className="button button-primary no-wrap" onClick={toggleTheme} >{theme === "light" ? "Use Dark Mode": "Use Light Mode" }</button></span>
      <span className='header__date no-wrap' >{date} - {time}</span>
      <span><a className="no-wrap button button-primary" href="#footer">Jump To Bottom</a></span>
    </section>
  )
}

export default Header;