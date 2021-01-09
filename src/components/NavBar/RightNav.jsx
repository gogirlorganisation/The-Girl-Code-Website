import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    font-weight: 700;
    background-color: ${({ open , bgOut, bgIn, textOut, textIn}) => bgOut};
    padding: 5px 20px;
    
    color: ${({ open , bgOut, bgIn, textOut, textIn}) => textOut};
  }


  li:nth-child(6) {
      background-color: ${({ open , bgOut, bgIn, textOut, textIn}) => bgOut};
      color: ${({ open , bgOut, bgIn, textOut, textIn}) => textOut};  
      border: 2px solid black;
      border-radius: 7px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ open , bgOut, bgIn, textOut, textIn}) => bgIn};
    position: fixed;
    transform: ${({ open , bgOut, bgIn, textOut, textIn}) => open ? 'translateX(-100%)' : 'translateX(0)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    right: -300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        background-color: ${({ open , bgOut, bgIn, textOut, textIn}) => bgIn};
        padding: 15px 35px;
        color: ${({ open , bgOut, bgIn, textOut, textIn}) => textIn};
    }

    li:nth-child(6) {
      border: none;
      color: ${({ open , bgOut, bgIn, textOut, textIn}) => textIn};  

  }

  }
`;

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