import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
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
  Corousel,
  Bord,
} from "./team.page.styles";
import superhero from "../../assets/homepage/Superhero.jpg";

import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ShadowButton from "../../components/Button/button.component";
import Directors from "../../components/Directors/Directors.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
import TextCard from "../../components/TextCard/textcard.component";
import CommunitySection from "../../components/Community/community.component";
import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
const Header = () => {
  return (
    <div>
      <StyledJumbo>
        <Row>
          <Col md={5}>
            <Image
              class="img-responsive float-left"
              width="100%"
              src={superhero}
            />
          </Col>
          <Col md={{ span: 5, offset: 1 }} class="d-flex flex-column mb-3">
            <Row>
              <StyleHead>Our Team</StyleHead>
            </Row>
            <Row>
              <StylePee>Together everyone achieves more!</StylePee>
            </Row>
            <Row>
              <Bord>
                <ShadowButton buttonText={"INTERN WITH US"} />
              </Bord>
              <Bord>
                <ShadowButton buttonText={"INTERN WITH US"} />
              </Bord>
              <Bord>
                <ShadowButton buttonText={"INTERN WITH US"} />
              </Bord>
            </Row>
          </Col>
        </Row>
      </StyledJumbo>
    </div>
  );
};

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
      <Directors
        imgUrlOne="https://source.unsplash.com/Dm-qxdynoEc/800x799"
        nameOne="Japnit Ahuja"
        imgUrlTwo="https://source.unsplash.com/Dm-qxdynoEc/800x799"
        nameTwo="Samriddhi Agnihotri"
      />
      <PinkTextBox
        heading="ABOUT THE DIRECTORS"
        text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
      />
      <Team
        backgroundColour="#FBEDF3"
        heading="TECHNOLOGY DEPARTMENT"
        leads={[
          [
            "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            "Mushroom boss",
            "Head Of Fungi Development",
          ],
        ]}
        mems={[
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
        ]}
      />

      <Team
        backgroundColour="#FFFFFF"
        heading="SAUCE DEPARTMENT"
        leads={[
          [
            "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            "Mushroom boss",
            "Head Of Fungi Development",
          ],
        ]}
        mems={[
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
          ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
        ]}
      />

      <Donate />
      <Footer />
    </div>
  );
};
export default Home;
