import React from "react";

import NavBar from "../components/NavBar/NavBar.component";
import GlobalStyle from "./globalStyles";
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo.component";

  const Home = () => {
    return (
      <div>
        <GlobalStyle />
        <NavBar bgOut="transparent" bgIn="#F05680" textOut="black" textIn="white"/>
        <YoutubeVideo videoOne='https://www.youtube.com/watch?v=ysz5S6PUM-U' videoTwo='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
      </div>
    );
  };
  export default Home;

