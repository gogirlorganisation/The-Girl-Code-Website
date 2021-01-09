import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`

  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  background-color: transparent;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    z-index:1000;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#FFF' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

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