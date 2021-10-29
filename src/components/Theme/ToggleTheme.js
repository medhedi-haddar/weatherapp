import React from 'react';
import { BsSun,BsMoonStars } from "react-icons/bs";

export const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle-container" onClick={toggleTheme}>
      { theme === 'light' ? <BsMoonStars size={25} /> : <BsSun size={25}/> }
    </div>
  )
}