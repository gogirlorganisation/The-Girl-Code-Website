import React from "react";

import NavBar from "../components/NavBar/NavBar.component";
import GlobalStyle from "./globalStyles";
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../components/SocialMediaDiv/SocialMediaDiv.component";

  const Home = () => {
    return (
      <div>
        <GlobalStyle />
        <NavBar bgOut="transparent" bgIn="#F05680" textOut="black" textIn="white"/>
        <YoutubeVideo videoOne='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                      videoTwo='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                      textOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                      textTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <SocialMediaDiv/>
      </div>
    );
  };
  export default Home;

