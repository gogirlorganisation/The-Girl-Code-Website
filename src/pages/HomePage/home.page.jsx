import React from "react";

import {WhiteBackground, VideoContainer, PinkBackground} from './home.page.styles';

import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.components";
import ImageCorousel from  "../../components/ImageCorousel/imagecorousel.component";



import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
import Header from "../../components/Header/Header.component";
import Heading from "../../components/Heading/heading.component";


  const Home = () => {
    return (
      <div>
        <GlobalStyle />

        <NavBar bgOut="transparent" bgIn="#F05680" textOut="black" textIn="white"/>

        <Stats
        stats={[
          ["70", "FLAGSHIP STAT1"],
          ["400+", "FLAGSHIP STAT2"],
          ["35", "FLAGSHIP STAT3"],
        ]}
        />

        <PinkTextBox heading = "MISSION" 
                     text = " At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
        />

        <PinkBackground>
          <ImageCorousel imgUrls = {['workshop.png', 'workshop2.jpg', 'workshop3.jpg', 'workshop4.jpg']} />
        </PinkBackground>
       
        
        <WhiteBackground>
          <Heading heading = "Featured"/>
          <VideoContainer>
          <YoutubeVideo videoOne='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                        videoTwo='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                        textOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                        textTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          </VideoContainer>
        </WhiteBackground>

       
      <SocialMediaDiv/>
     
      </div>
    );
  };
  export default Home;


