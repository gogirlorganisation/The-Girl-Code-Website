import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ChapterHeaderImg from "../../assets/Chapter/chapter_header.png";
import ChapterCardImg from "../../assets/Chapter/chaptercard.jpg";
import ShadowButton from "../../components/Button/button.component";
import Card from "../../components/Card/card.component";
import IconImg from "../../assets/Chapter/icon.jpg";
import {
  ButtonBg,
  CardBg,
  ChapterHeading,
  DonateBg,
  HeaderBg,
  HeadingStyle,
  ImgCarouselStyle,
  ImgStyle,
} from "./chapter.styles";

const Header = () => {
  return (
    <Row>
      <Col className="justify-content-center">
        <ImgStyle>
          <Image src={ChapterHeaderImg} fluid />
        </ImgStyle>
      </Col>
      <Col>
        <Row className="justify-content-center">
          <ChapterHeading>Chapters</ChapterHeading>
        </Row>
        <ButtonBg>
          <Row className="justify-content-center">
            <ShadowButton buttonText={"Contact Us"} />
          </Row>
        </ButtonBg>
        <ButtonBg>
          <Row className="justify-content-center">
            <ShadowButton buttonText={"Start A Chapter"} />
          </Row>
        </ButtonBg>
      </Col>
    </Row>
  );
};

const Chapter = () => {
  return (
    <div>
      <NavBar />
      <HeaderBg>
        <Header />
      </HeaderBg>
      <Stats
        stats={[
          ["70", "FLAGSHIP STAT1"],
          ["400+", "FLAGSHIP STAT2"],
          ["35", "FLAGSHIP STAT3"],
        ]}
      />
      <HeadingStyle>
        <Heading heading="FIND YOUR CITY" />
      </HeadingStyle>
      <StartChapter />
      <ImgCarouselStyle>
        <ImageCorousel
          imgUrls={[
            "homepage/imagegallery/workshop.png",
            "homepage/imagegallery/workshop2.jpg",
            "homepage/imagegallery/workshop3.jpg",
            "homepage/imagegallery/workshop4.jpg",
          ]}
        />
      </ImgCarouselStyle>
      <HeadingStyle>
        <Heading heading="OUR CHAPTERS" />
      </HeadingStyle>
      <CardBg>
        <Card
          image={ChapterCardImg}
          title="Bangalore"
          subtitle=""
          //   icons={[[IconImg]]}
          description="est. June 2020"
          isButton={true}
        />
      </CardBg>
      <DonateBg>
        <Donate
          button="DONATE NOW"
          title="Help support The Girl Code"
          content="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
        />
      </DonateBg>
      <Footer />
    </div>
  );
};
export default Chapter;
