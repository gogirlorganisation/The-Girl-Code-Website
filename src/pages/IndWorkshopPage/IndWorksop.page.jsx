import React from "react";
import { Container, Button, Col, Row,Image } from "react-bootstrap";
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
import { AcknowledgementBg, HeaderBg,WorkHeading,SubHeading, BoxStyle, CardHeading, CardBg } from "./IndWorkshop.styles";

const Header = () => {
    return(
        <Container fluid>
            <Row>
            <Col>
            <Image style={{paddingLeft:"5rem"}} src={IndWorkshopImg} fluid/>
            </Col>
            <Col className="justify-content-center">
            <WorkHeading>
            Lorem Ipsum
            </WorkHeading>
            <br/>
            <SubHeading>
            January 2020
            </SubHeading>
            </Col>
            </Row>
        </Container>
    );
};

const IndWorkshop = () => {
    return(
        <div>
        <NavBar/>
        <HeaderBg>
        <Header/>
        </HeaderBg>
        <Stats
        stats={[
          ["70", "FLAGSHIP STAT1"],
          ["400+", "FLAGSHIP STAT2"],
          ["35", "FLAGSHIP STAT3"],
        ]}
      />
      <BoxStyle>
      <PinkTextBox heading='MISSION' 
        text='At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm.'/>
        </BoxStyle>
        <BoxStyle>
      <ImageCorousel imgUrls = {['homepage/imagegallery/workshop.png', 'homepage/imagegallery/workshop2.jpg', 'homepage/imagegallery/workshop3.jpg', 'homepage/imagegallery/workshop4.jpg']} />
      </BoxStyle>
      <CardBg>
      <CardHeading>
      <Heading  heading='PROJECT SHOWCASE' />
      </CardHeading>
      <Card 
      image={ProjectCardImg}
      title=" Project Name"
      subtitle="PERSON NAME"
      icons={[[]]}
      description="Python Course"
      isButton={true}
      />
      </CardBg>
       <Testimonial
        name="-John Doe"
        text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them."
      />
      <AcknowledgementBg>
      <Acknowledgement heading="HERE'S WHAT NUS HAD TO SAY"/>
      </AcknowledgementBg>
      <Donate 
        button='DONATE NOW'
        title='Help support The Girl Code'
        content='At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops.'
      />
      <Footer/>
      </div>
    );
};
export default IndWorkshop;