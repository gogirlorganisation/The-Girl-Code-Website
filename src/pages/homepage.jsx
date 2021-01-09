import React from "react";

import NavBar from "../components/NavBar/NavBar.component";
import GlobalStyle from "./globalStyles";


  const Home = () => {
    return (
      <body>
        <GlobalStyle />
        <NavBar bgOut="transparent" bgIn="#F05680" textOut="black" textIn="white"/>
      </body>
    );
  };
  export default Home;

