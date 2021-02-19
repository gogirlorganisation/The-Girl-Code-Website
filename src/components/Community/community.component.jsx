import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import superhero from '../../assets/homepage/Superhero.jpg';
import { HeadingStyle,DescriptionStyle } from "./community.styles";


export default function CommunitySection({content }) {
  const listItems = content.map(c => (
    <Row>
       <div
        style={{
          fontSize: "35px",
          color: "#D74B83",
          fontWeight: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }} fluid
      >
        <HeadingStyle>{c[0]}</HeadingStyle>
         
      </div>
      <div
        style={{
          color: "#666666",
          fontSize: "17px",
          textAlign: "center",
          marginBottom:"2rem",
          padding:"0.1rem 3rem",
        }}
      >
       <DescriptionStyle> {c[1]}</DescriptionStyle>
       </div>
    </Row>
  ));
  return (
    <Container >
      <Row>
        
        <Col md={5} style={{ marginTop: "auto", marginBottom: "auto" }}>
          {listItems}
        </Col>
        <Col
          md={6}
          style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center" }}
        >
          <Image src={superhero} fluid style={{maxHeight: "60vh",margin:"3rem"}}/>
        </Col>
      </Row>
    </Container>
  );
}
  