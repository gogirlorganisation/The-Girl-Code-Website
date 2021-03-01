import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import WebDevImg from "../../assets/webdev.png";
import SocialMediaImg from "../../assets/socialmedia.png";
import OutreachImg from "../../assets/outreach.png";
import ContentImg from "../../assets/content.png";
import DesignImg from "../../assets/design.png";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import {
  MainHeading,
  HeaderText,
  StartChapterSection,
  DonateSection,
  InternshipsSection,
} from "./joinus.page.style";
import Heading from "../../components/Heading/heading.component";
// import TextCard from "../../components/TextCard/textcard.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Button from "../../components/Button/button.component";
// import superhero from "../../assets/homepage/Superhero.jpg";
import JoinCommunity from "../../components/JoinCommunity/joincommunity.components";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Internships from "../../components/Internships/internships.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ShadowButton from "../../components/Button/button.component";

const JoinUs = () => {
  // const internships =

  return (
    <>
      <GlobalStyle />
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="#F05680"
      />
      <Container style={{ paddingTop: "6rem" }}>
        <Row>
          <Col md={6}>
            <Image src={JoinImg} alt="Join Us" fluid />
          </Col>
          <Col xs={0} md={1} />
          <Col md={5}>
            <MainHeading>Join Us </MainHeading>
            <HeaderText>Together everyone achieves more!</HeaderText>
            <ShadowButton Text = {'INTERN WITH US'} />
            <ShadowButton Text = {'START A CHAPTER'} />
            <ShadowButton Text = {'JOIN THE CCOMMUNITY'} />
          </Col>
        </Row>
      </Container>
      <PinkTextBox
        heading={"WHY WORK WITH US"}
        text={
          "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
        }
      />
      <InternshipsSection>
        <Heading heading="INTERNSHIPS" />
        <Container className="mt-5">
          <Internships
            content={[
              [
                "WEB DEVELOPMENT",
                "At The Girl Code, we aim to bridge the gender gap in the tech community.",
                WebDevImg,
              ],
              [
                "CONTENT",
                "At The Girl Code, we aim to bridge the gender gap in the tech community.",
                ContentImg,
              ],
              [
                "OUTREACH",
                "At The Girl Code, we aim to bridge the gender gap in the tech community.",
                OutreachImg,
              ],
              [
                "DESIGN",
                "At The Girl Code, we aim to bridge the gender gap in the tech community.",
                DesignImg,
              ],
              [
                "SOCIAL MEDIA",
                "At The Girl Code, we aim to bridge the gender gap in the tech community.",
                SocialMediaImg,
              ],
            ]}
          />
        </Container>
        <Button Text={"Apply Now"} />
      </InternshipsSection>
      {/* <Container style={{ textAlign: "center", marginTop: "4rem" }}>
        <Button Text={"Apply Now"} />
      </Container> */}
      <JoinCommunity />
      <StartChapterSection>
        <Heading heading={"Start a chapter"} />
        <StartChapter />
      </StartChapterSection>
      <DonateSection>
        <Donate
          title={"Help support The Girl Code"}
          content={
            "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
          }
          button={"Donate Now"}
        />
      </DonateSection>
      <Footer />
    </>
  );
};

export default JoinUs;
