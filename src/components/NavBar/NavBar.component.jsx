import React from 'react';

import Burger from './Burger';
import {Nav} from './NavBar.styles';

const NavBar = ({bgOut, bgIn, textOut, textIn}) => {
  return (
    <Nav bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <div className="logo"></div>
      <Burger bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}/>
    </Nav>
  )
}

export default NavBar;