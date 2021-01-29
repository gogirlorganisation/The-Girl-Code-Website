import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
// import {
//   MainHeading,
//   HeaderText,
//   StartChapterSection,
//   DonateSection,
// } from "./joinus.page.style";
import {
  MainHeading,
  HeaderText,
  PinkBoxDiv,
  ImageBox,
  UpcomingWorkshopsDiv,
  CardsDiv,
  PastWorkshopsDiv,
  StartChapterSection,
  DonateSection,
} from "./workshop.page.style";
import Heading from "../../components/Heading/heading.component";
import Card from "../../components/Card/card.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Button from "../../components/Button/button.component";
import WorkshopsImage from "../../assets/WorkshopsImage.jpg";
import WorkshopsHeader from "../../assets/WorkshopsHeader.jpg";
import JoinCommunity from "../../components/JoinCommunity/joincommunity.components";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Stats from "../../components/Stats/stats.component";
import Footer from "../../components/Footer/footer.component";

class Workshop extends React.Component {
  state = {
    data: [],
  };

  fetchData = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/faraz16iqbal/google_sheets/MMNWUTxhWRPIlcdp?tabId=Workshops",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      this.setState({ data: data.data });
      // console.log(this.state);
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    const cards = data.map((card) => (
      <Card
        image={card.image}
        icons={card.icons}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        isButton={card.isButton}
      />
    ));

    return (
      <>
        <GlobalStyle />
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
        <Container style={{ paddingTop: "8rem" }}>
          <Row>
            <Col md={7}>
              <Image src={WorkshopsHeader} alt="Join Us" fluid />
            </Col>
            <Col md={5}>
              <MainHeading>Our Workshops </MainHeading>
              <HeaderText>
                We seek to inspire girls to discover and pursue programming.
              </HeaderText>
            </Col>
          </Row>
        </Container>
        <Stats
          stats={[
            ["70", "FLAGSHIP STAT1"],
            ["400+", "FLAGSHIP STAT2"],
            ["35", "FLAGSHIP STAT3"],
          ]}
        />
        <ImageBox>
          <Heading heading={"COVID RESPONSE"} />
          <Image
            src={WorkshopsImage}
            fluid
            style={{ maxHeight: "60vh", padding: "0.5rem 1rem" }}
          />
        </ImageBox>
        <PinkBoxDiv>
          <PinkTextBox
            heading={"MISSION"}
            text={
              "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
            }
          />
        </PinkBoxDiv>

        <UpcomingWorkshopsDiv>
          <Heading heading={"UPCOMING WORKSHOPS"} />
          <CardsDiv>
            <br />
            {cards}
          </CardsDiv>
        </UpcomingWorkshopsDiv>

        <PastWorkshopsDiv>
          <Heading heading={"UPCOMING WORKSHOPS"} />
          <CardsDiv>
            <br />
            {cards}
          </CardsDiv>
        </PastWorkshopsDiv>

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
        {/* <PinkTextBox
        heading={"WHY WORK WITH US"}
        text={
          "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
        }
      />
      <Container style={{ textAlign: "center", marginTop: "4rem" }}>
        <TextCard
          heading="INTERNSHIPS"
          content={[
            [
              "WORKSHOPS",
              "At The Girl Code, we aim to bridge the gender gap in the tech community.",
              superhero,
            ],
            [
              "ONLINE",
              "At The Girl Code, we aim to bridge the gender gap in the tech community.",
              superhero,
            ],
            [
              "COMMUNITY",
              "At The Girl Code, we aim to bridge the gender gap in the tech community.",
              superhero,
            ],
            [
              "COMMUNITY",
              "At The Girl Code, we aim to bridge the gender gap in the tech community.",
              superhero,
            ],
          ]}
        />
        <Button Text={"Apply Now"} />
      </Container>
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
        /> */}
        {/* </DonateSection> */}
        <Footer />
      </>
    );
  }
}

export default Workshop;
