import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
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
} from "./home.page.style";
import superhero from "../../assets/homepage/Superhero.jpg";

import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";

import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
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
        <StyledContainer>
          <StyledRow className="justify-content-center mt-5">
            <StyleHead>Welcome To The Girl Code</StyleHead>
          </StyledRow>
          <StyledRow className="justify-content-center mt-2">
            <StylePee>
              We seek to inspire girls to discover and pursue programming
            </StylePee>
          </StyledRow>
          <StyledRow className="justify-content-center mt-5">
            <StyledButtonOne variant="outline-light" className="rounded-0">
              JOIN US
            </StyledButtonOne>{" "}
            <StyledButtonTwo variant="outline-light" className="rounded-0">
              LEARN MORE
            </StyledButtonTwo>{" "}
          </StyledRow>
        </StyledContainer>
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
        textOut="white"
        textIn="white"
      />
      <Header />
      <StatsDiv>
        <Stats
          stats={[
            ["70", "FLAGSHIP STAT1"],
            ["400+", "FLAGSHIP STAT2"],
            ["35", "FLAGSHIP STAT3"],
          ]}
        />
      </StatsDiv>
      <PinkTextBoxDiv>
        <PinkTextBox
          heading="MISSION"
          text="Bridging the gender gap in Tech one free workshop at a time! We host fun and friendly workshops for young students to learn programming at schools and universities local to them. Through our unique approach, and our intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm!"
        />
      </PinkTextBoxDiv>
      {/* <SuperheroDiv>
        <SuperHeroTextDiv>
        </SuperHeroTextDiv>
        <SuperHeroImgDiv>
          <SuperHeroImg src={superhero} />
        </SuperHeroImgDiv>
      </SuperheroDiv> */}

      <CommunitySection
        content={[
          [
            "Confidence",
            "Instill confidence in young girls to stand tall and unapologetically in an industry dominated by men.",
          ],
          [
            "Community",
            "Build a tight-knit community of young female programmers to support, motivate, and inspire each other.",
          ],
          [
            "Curiosity",
            "Inspire students to seek more knowledge, to question everything, and to build on their curiosity for Computer Science.",
          ],
        ]}
      />

      <Corousel>
        <ImageCorousel
          imgUrls={[
            "homepage/imagegallery/workshop.png",
            "homepage/imagegallery/workshop2.jpg",
            "homepage/imagegallery/workshop3.jpg",
            "homepage/imagegallery/workshop4.jpg",
          ]}
        />
      </Corousel>
      <TextCard
        heading="OUR PROGRAM"
        content={[
          [
            "WORKSHOPS",
            "We host free coding workshops in Python & HTML CSS at schools and universities." /*imgurl*/,
          ],
          [
            "ONLINE",
            "Due to covid-19, we’ve moved our workshops online to virtual platforms that will allow us for a more hands-on teaching." /*imgurl*/,
          ],
          [
            "COMMUNITY",
            "We have a Slack Community of over 500 TGC workshop attendees!" /*imgurl*/,
          ],
          [
            "MENTORS",
            "One-on-One help and advice from experienced women in tech! We have mentors ready to help for our workshops and slack community!" /*imgurl*/,
          ],
        ]}
      />
      <SocialMediaSection>
        <Heading heading="SOCIAL MEDIA" />
        <p style={{ fontWeight: "500" }}>
          Selection from our <span style={{ color: "#d74b8d" }}>socials</span>
        </p>
        <SocialMediaDiv />
      </SocialMediaSection>

      <YouTubeSection>
        <HeadingDiv>
          <Heading heading="featured" />
        </HeadingDiv>
        <YoutubeVideo
          videoOne="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          videoTwo="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          textOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          textTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </YouTubeSection>
      <StartAChapterDiv>
        <Heading heading="Start A Chapter" />
        <StartChapter />
      </StartAChapterDiv>
      <Donate
        button="DONATE NOW"
        title="Help support The Girl Code"
        content="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
      />
      <Footer />
    </div>
  );
};
export default Home;
