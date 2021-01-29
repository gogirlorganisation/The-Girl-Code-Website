import React from "react";
import { Container, Button, Col, Row , Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  StyledJumbo,
  StyleHead,
  StyledButton,
  StyledRow,
  StyledContainer,
  WhiteBackground,
  VideoContainer,
  PinkBackground,
  SuperheroDiv,
  SuperHeroTextDiv,
  SuperHeroImgDiv,
  SuperHeroImg,
  PinkTextBoxDiv,
  StatsDiv,
  StylePee,
  StyledButtonOne,
  StyledButtonTwo,
  SocialMediaSection,
  YouTubeSection,
  HeadingDiv,
  StartAChapterDiv,
  Corousel
} from "./team.page.styles";
import superhero from '../../assets/homepage/Superhero.jpg'


import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ImageCorousel from  "../../components/ImageCorousel/imagecorousel.component";

import ShadowButton from "../../components/Button/button.component";

import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
import TextCard from '../../components/TextCard/textcard.component'
import CommunitySection from "../../components/Community/community.component";
import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
const Header = () => {
        return (
          <div>
            <StyledJumbo>
            <Container>
            <Row>
                <Col md={6}><Image class="img-responsive float-left" width="100%" src={superhero}/></Col>
                <Col md={6}>
                  <Row class="justify content-left">
                    <StyleHead>
                    Our Team
                    </StyleHead>
                  </Row>
                 <Row class="justify content-left">
                    <StylePee>Together everyone achieves more!</StylePee>
                  </Row>
                  <Row>
                    <Row><ShadowButton  buttonText={"INTERN WITH US"}/></Row>
                    <Row><ShadowButton  buttonText={"START A CHAPTER"}/></Row>
                    <Row><ShadowButton  buttonText={"JOIN OUR COMMUNITY"}/></Row>
                  </Row>
                </Col>
            </Row>

            </Container>
           </StyledJumbo>
          </div>
        )
    
}

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="white"
      />
      <Header />
      <PinkTextBox 
        heading='MISSION' 
        text='At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm.'
      />
     
      <Donate 
        button='DONATE NOW'
        title='Help support The Girl Code'
        content='At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops.'
      />
      <Footer />
    </div>
  );
};
export default Home;
