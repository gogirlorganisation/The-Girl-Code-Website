import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import Heading from "../../components/Heading/heading.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ProjectCardImg from "../../assets/IndWorkshop/projectpic.jpg";
import Card from "../../components/Card/card.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import Acknowledgement from "../../components/Acknowledgement/acknowledgement.component";
import IndWorkshopImg from "../../assets/IndWorkshop/IndWorkshopImg.jpg";
import {
  AcknowledgementBg,
  HeaderBg,
  WorkHeading,
  SubHeading,
  BoxStyle,
  CardHeading,
  CardBg,
  ProjectShowcaseDiv
} from "./IndWorkshop.styles";
import { ShowMoreButton } from "../WorkshopPage/workshop.page.style";


class IndWorkshop extends React.Component {
  state = {
    workshopInfo: {},
    workshopItems: 4,
    loading: true,
    expanded: false,
    buttonText: "See More Workshops",
    myRef: React.createRef(),
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const workshopId = this.props.match.params.workshopId
    console.log(workshopId)
    let workshopData = await fetch(`/workshop/${workshopId}`)
    workshopData = await workshopData.json()
    console.log(workshopData)
    this.setState({
      workshopInfo: workshopData.workshop,
      loading: false
    }, () => {
      console.log(this.state, 'state')
    })
  }
  render() {
    const {
      workshopInfo
    } = this.state
    console.log(workshopInfo.testimonials)
    return (
      <div>
        <NavBar />
        <HeaderBg>
        <Container fluid>
      <Row>
        <Col>
          <Image style={{ paddingLeft: "5rem" }} src={IndWorkshopImg} fluid />
        </Col>
        <Col className="justify-content-center">
          <WorkHeading>{workshopInfo.workshopName}</WorkHeading>
          <SubHeading>{workshopInfo.dates}</SubHeading>
        </Col>
      </Row>
    </Container>
        </HeaderBg>
        <Stats
          stats={[
            [workshopInfo.flagshipStatValue1, 'PARTICIPANTS'],
            [workshopInfo.flagshipStatValue2, 'HOURS'],
            [workshopInfo.flagshipStatValue3, 'DAYS'],
          ]}
        />
        <BoxStyle>
          <PinkTextBox
            heading="MISSION"
            text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
          />
        </BoxStyle>
        <BoxStyle>
          <ImageCorousel
            imgUrls={[
              "homepage/imagegallery/workshop.png",
              "homepage/imagegallery/workshop2.jpg",
              "homepage/imagegallery/workshop3.jpg",
              "homepage/imagegallery/workshop4.jpg",
            ]}
          />
        </BoxStyle>
        
            {
              workshopInfo.project ? 
              (
                <ProjectShowcaseDiv>
          <CardHeading>
            <Heading heading="PROJECT SHOWCASE" />
          </CardHeading>
          <CardBg>
            {
              workshopInfo.project
              .slice(0, this.state.chapterItems)
              .map((card) => (
                <Card
                  image={card.projectImage}
                  id={card._id}
                  //icons={card.courseIcon}
                  title={card.projectName}
                  subtitle={card.personName}
                  description={card.courseName}
                  isButton='hi'
                />
              ))}
           </CardBg>
           <ShowMoreButton>
                See More Projects {'>'}
              </ShowMoreButton>
        </ProjectShowcaseDiv>
              ): null
            }

        {
          workshopInfo.testimonials ? (
            <Testimonial
            name={workshopInfo.testimonials[0].name}
            text={workshopInfo.testimonials[0].testimonial}
            />
          ): null
        }
       
        <AcknowledgementBg>
          <Acknowledgement heading="HERE'S WHAT NUS HAD TO SAY" image={workshopInfo.LOR}/>
        </AcknowledgementBg>
        <Donate
          button="DONATE NOW"
          title="Help support The Girl Code"
          content="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
        />
        <Footer />
      </div>
    );
  }
}

export default IndWorkshop;
