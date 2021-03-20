import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderImage from "../../assets/homepage/Superhero.jpg";
import Card from "../../components/Card/card.component";
import ChapterCardImg from "../../assets/Chapter/chaptercard.jpg";

import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ShadowButton from "../../components/Button/button.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
import TextCard from "../../components/TextCard/textcard.component";
import Heading from "../../components/Heading/heading.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";

import superhero from "../../assets/homepage/Superhero.jpg";
import indchapter from '../../assets/IndChapter/indchapter.png'

import {
  StyledJumbo,
  StyleHead,
  Bord,
  PinkTextBoxDiv,
  StatsDiv,
  Corousel,
  OtherChapters,
  TeamDiv
} from "./individualchapter.page.styles";
import { CardsDiv, PastWorkshopsDiv, UpcomingWorkshopsDiv } from "../WorkshopPage/workshop.page.style";
import { CardBg, DonateBg } from "../ChapterPage/chapter.styles";

const Header = () => {
  return (
    <div>
      <StyledJumbo>
        <Row>
          <Col md={5}>
            <Image
              class="img-responsive float-left"
              width="100%"
              src={indchapter}
            />
          </Col>
          <Col md={{ span: 5, offset: 1 }} class="d-flex flex-column mb-3">
            <Row>
              <StyleHead>Delhi Chapter</StyleHead>
            </Row>

            <Row>
              <Bord>
                <ShadowButton Text={"CONTACT US"} />
              </Bord>
              <Bord>
                <ShadowButton Text={"START A CHAPTER"} />
              </Bord>
              <Bord>
                <ShadowButton Text={"JOIN DELHI CHAPTER"} />
              </Bord>
            </Row>
          </Col>
        </Row>
      </StyledJumbo>
    </div>
  );
};

const IndividualChapter = () => {
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
      <StatsDiv>
        <Stats
          stats={[
            ["70", "FLAGSHIP STAT1"],
            ["400+", "FLAGSHIP STAT2"],
            ["35", "FLAGSHIP STAT3"],
          ]}
        />
      </StatsDiv>
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
      <UpcomingWorkshopsDiv>
      <Heading heading={'UPCOMING WORKSHOPS'} />
      <CardBg>
      <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
      </CardBg>
      </UpcomingWorkshopsDiv>
      <PastWorkshopsDiv>
        <Heading heading={'PAST WORKSHOPS'} />
        <CardBg>
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        </CardBg>
      </PastWorkshopsDiv>
      <TeamDiv>
      <Team
        backgroundColour="#ffffff"
        heading="TEAM"
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
      </TeamDiv>
      <OtherChapters>
      <Heading heading={'OTHER CHAPTERS'} />
      <CardBg>
      <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
      </CardBg>
      </OtherChapters>
      <Donate />
      <Footer />
    </div>
  );
};
export default IndividualChapter;
