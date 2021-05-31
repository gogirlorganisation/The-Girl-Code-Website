import React from "react";
import { Container, Button, Col, Row, Image, Spinner } from "react-bootstrap";
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
import { CardsDiv,  ShowMoreButton, UpcomingWorkshopsDiv } from "../WorkshopPage/workshop.page.style";
import { CardBg, DonateBg } from "../ChapterPage/chapter.styles";
import {PastWorkshopsDiv} from './individualchapter.page.styles'


class IndividualChapter extends React.Component {
  state = {
    chapterInfo: {},
    workshops: [],
    chapterItems: 4,
    loading: true,
    expanded: false,
    buttonText: "See More Workshops",
    myRef: React.createRef(),
    teamLead: [],
    membersInfo: []
  }
  
  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const chapterId = this.props.match.params.chapterId
    console.log(chapterId)
    let chapterData = await fetch(`/chapter/${chapterId}`)
    chapterData = await chapterData.json()
    console.log(chapterData)
    this.setState({
      chapterInfo: chapterData.chapter,
      workshops: chapterData.chapter.workshops,
      team: chapterData.chapter.team,
      loading: false
    }, () => {
      console.log(this.state, 'state')
    })
    this.manageTeam();
  }

  manageTeam = () => {
    let team = this.state.team
    let members = []
    team.map((member) => {
      if(member.designation == 'CHAPTER LEAD'){
        this.state.teamLead = member
      }else{
        members.push([member.image, member.name])
        this.setState({
          membersInfo: members
        })
      }
    })
    console.log(this.state, 'manage team')
  }

  click = (e) => {
    console.log(e.target.dataset.id, 'hi')
    this.props.history.push(`/workshop/${e.target.dataset.id}`)
  }

  toggleShow = () => {
    if (this.state.expanded === false) {
      this.setState({
        chapterItems: this.state.chapterInfo.workshops.length,
        buttonText: "Show Less",
        expanded: true,
      });
    } else {
      this.setState({
        chapterItems: 4,
        buttonText: "See More Workshops",
        expanded: false,
      });
      this.state.myRef.current.scrollIntoView();
    }
  };

  render() {
    const {
      chapterInfo,
      loading,
      buttonText,
      workshops,
      team
    } = this.state
    console.log(workshops)
    
    return (
      <div>
        <GlobalStyle />
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="white"
        />
  
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
                <StyleHead>{this.state.chapterInfo.chapterName}</StyleHead>
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
        <StatsDiv>
          <Stats
            stats={[
              [chapterInfo.flagshipStatValue1, "WORKSHOPS"],
              [chapterInfo.flagshipStatValue2, "STUDENTS IMPACTED"],
              [chapterInfo.flagshipStatValue3, "HOURS TAUGHT"],
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
        <PastWorkshopsDiv>
          <Heading heading={'PAST WORKSHOPS'} />
          <CardBg ref={this.state.myRef}>
          {loading ? (
            <Spinner animation="border" variant="danger" className="mt-5" />
          ) : (
            <CardsDiv className="mt-5 flex-wrap">
              {workshops
                .slice(0, this.state.chapterItems)
                .map((card) => (
                  <Card
                    onClick={this.click}
                    image={card.image}
                    id={card._id}
                    //icons={card.courseIcon}
                    title={card.workshopName}
                    subtitle={card.dates}
                    description={card.description}
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
        </PastWorkshopsDiv>
        <TeamDiv>
        <Team
          heading="TEAM"
         
          leads={[
            [
              // "https://source.unsplash.com/Dm-qxdynoEc/800x799",
              // "Mushroom boss",
              // "Head Of Fungi Development",
              this.state.teamLead.image,
              this.state.teamLead.name,
              this.state.teamLead.designation

            ]
          ]}
          mems={
            // ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
            // ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
            // ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
            // ["https://source.unsplash.com/Dm-qxdynoEc/800x799", "Mushroom"],
            this.state.membersInfo
          }
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
        <DonateBg>
        <Donate />
        </DonateBg>
        <Footer />
      </div>
    );
  }
}


export default IndividualChapter;
