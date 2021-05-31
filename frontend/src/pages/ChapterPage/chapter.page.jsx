import React, {Component} from "react";
import { Col, Row, Image, Spinner } from "react-bootstrap";
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
import { CardsDiv, ShowMoreButton } from "../WorkshopPage/workshop.page.style";



const Header = () => {
  return (
    <Row>
      <Col className="justify-content-center">
        <ImgStyle>
          <Image src={ChapterHeaderImg} fluid style={{ height: "60vh" }} />
        </ImgStyle>
      </Col>
      <Col>
        <Row className="justify-content-center">
          <ChapterHeading>Chapters</ChapterHeading>
        </Row>
        <Row className="justify-content-center">
          <ButtonBg>
            <ShadowButton Text={"Contact Us"} />
          </ButtonBg>
        </Row>
        <Row className="justify-content-center">
          <ButtonBg>
            <ShadowButton Text={"Start A Chapter"} />
          </ButtonBg>
        </Row>
      </Col>
    </Row>
  );
};

class Chapter extends Component {
  state = {
    chaptersInfo: [],
    pastChapterItems: 4,
    loading: true,
    buttonText: "See More Chapters",
    expanded: false,
    myRef: React.createRef(),
  }

  fetchData = async () => {
    try {
        let chapters = await fetch('/chapters')
        chapters = await chapters.json()
        console.log(chapters.chapters)
        this.setState({
          chaptersInfo: chapters.chapters,
          loading: false
        }, () => {
          console.log(this.state, this.state.chaptersInfo)
        })
        console.log(this.state.img)
        
    } catch (error) {
      console.log(error)
    }
  }

  click = (e) => {
    console.log(e.target.dataset.id, 'hi')
    this.props.history.push(`/chapter/${e.target.dataset.id}`)
  }

  componentDidMount(){
    this.fetchData()
  }

  toggleShow = () => {
    if (this.state.expanded === false) {
      this.setState({
        pastChapterItems: this.state.chaptersInfo.length,
        buttonText: "Show Less",
        expanded: true,
      });
    } else {
      this.setState({
        pastChapterItems: 4,
        buttonText: "See More Chapters",
        expanded: false,
      });
      this.state.myRef.current.scrollIntoView();
    }
  };

  render() {
    const {
      chaptersInfo,
      loading,
      buttonText
    } = this.state
    return (
      <div>
      <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
      <HeaderBg>
        <Header />
      </HeaderBg>
      <Stats
        stats={[
          ["70", "NO. OF CHAPTERS"],
          ["400+", "STUDENTS IMPACTED"],
          ["35", "WORKSHOPS"],
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
      <CardBg ref={this.state.myRef}>

      {loading ? (
            <Spinner animation="border" variant="danger" className="mt-5" />
          ) : (
            <CardsDiv className="mt-5 flex-wrap">
              {chaptersInfo
                .slice(0, this.state.pastChapterItems)
                .map((card) => (
                  <Card
                    onClick={this.click}
                    image={card.image}
                    id={card._id}
                    //icons={card.courseIcon}
                    title={card.chapterName}
                    //subtitle={card.dates}
                    //description={card.description}
                    isButton='hi'
                  />
                ))}
            </CardsDiv>
          )}
          {!loading ? (
            <ShowMoreButton onClick={this.toggleShow}>
              {buttonText} {">"}
            </ShowMoreButton>
          ) : (
            " "
          )}
      </CardBg>
      <DonateBg>
        <Donate />
      </DonateBg>
      <Footer />
    </div>
    )
  }
}

export default Chapter;
