import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.styles.css';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact 
        activeClassName="selectedLink"
        to ="/toggle">Toggle Bold</NavLink>
      </li>
    </ul>
  )
}

export default Navigation
