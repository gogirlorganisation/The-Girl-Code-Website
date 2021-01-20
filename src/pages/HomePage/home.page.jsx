import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { StylePee, StyledJumbo, StyleHead, StyledButtonOne, StyledButtonTwo,  StyledRow, StyledContainer } from "./home.page.style";


import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
const Header = () => {
        return (
          <div>
            <StyledJumbo>
             
            <StyledContainer>
            <StyledRow className="justify-content-center">
                <StyleHead>Welcome To The Girl Code</StyleHead>
            </StyledRow>
            <StyledRow className="justify-content-center mt-2">
                <StylePee>We seek to inspire girls to discover and pursue programming</StylePee>
            </StyledRow>
            <StyledRow className="justify-content-center mt-5">
                <StyledButtonOne variant="outline-light" className="rounded-0">JOIN US</StyledButtonOne>{' '}
                <StyledButtonTwo variant="outline-light" className="rounded-0">LEARN MORE</StyledButtonTwo>{' '}
            </StyledRow>
            </StyledContainer>
           </StyledJumbo>
          </div>
        )
    
}

const Home = () => {
    return (
      <div>
        <GlobalStyle />
        <NavBar bgOut="transparent" bgIn="#F05680" textOut="white" textIn="white"/>
        <Header/>

      <SocialMediaDiv/>
      <LeadCard imgUrl="https://source.unsplash.com/Dm-qxdynoEc/800x799" name="Mushroom Boss" designation="Head Of Fungi Development"/>
      <MemberCard imgUrl="https://source.unsplash.com/Dm-qxdynoEc/800x799" name="Mushroom"/>
      <Team/>

      <YoutubeVideo videoOne='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                      videoTwo='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                      textOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                      textTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      </div>
    );
  };
  export default Home;


