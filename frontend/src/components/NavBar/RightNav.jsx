import React from 'react';
import { Link } from 'react-router-dom';

import { Ul } from "./NavBar.styles";

const RightNav = ({ open , bgOut, bgIn, textOut, textIn}) => {
  return (
    <Ul open={open} bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <Link to='/'><li>HOME</li></Link>
      <Link to='/team'><li>TEAM</li></Link>
      <Link to='/chapter'><li>CHAPTERS</li></Link>
      <Link to='/workshops'><li>WORKSHOPS</li></Link>
      <Link to='/joinus'><li>JOIN</li></Link>
      <Link to='/'><li>LEARN</li></Link>
    </Ul>
  )
}

export default RightNav;