import React, { useState } from 'react';
import RightNav from './RightNav';

import { StyledBurger } from "./NavBar.styles";

const Burger = ({bgOut, bgIn, textOut, textIn}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}/>
    </>
  )
}
export default Burger;