import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import { MainHeading, HeaderText } from "./joinus.page.style";
import Heading from "../../components/Heading/heading.component";
import TextBox from "../../components/PinkTextBox/pinktextbox.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";

const JoinUs = () => {
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
          </Col>
        </Row>
      </Container>
      <PinkTextBox
        heading={"WHY WORK WITH US"}
        text={
          "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
        }
      />
      <Container style={{ textAlign: "center", marginTop: "4rem" }}>
        <Heading heading={"Interships"} />
      </Container>
    </>
  );
};

export default JoinUs;
