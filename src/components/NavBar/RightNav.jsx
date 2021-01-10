import React from 'react';
import styled from 'styled-components';

import { Ul } from "./NavBar.styles";

const RightNav = ({ open , bgOut, bgIn, textOut, textIn}) => {
  return (
    <Ul open={open} bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <li>HOME</li>
      <li>TEAM</li>
      <li>CHAPTERS</li>
      <li>WORKSHOPS</li>
      <li>JOIN</li>
      <li>LEARN</li>
    </Ul>
  )
}

export default RightNav;