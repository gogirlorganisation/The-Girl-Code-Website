import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index:1000;
  width: 100%;
  height: 80px;
  padding: 25px 25px;
  display: flex;
  background-color: ${({bgOut, bgIn, textOut, textIn}) => bgOut};
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const NavBar = ({bgOut, bgIn, textOut, textIn}) => {
  return (
    <Nav bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <div className="logo"></div>
      <Burger bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}/>
    </Nav>
  )
}

export default NavBar;