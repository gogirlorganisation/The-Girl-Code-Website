import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { descriptionStyle, headingStyle } from "../Community/community.styles";
import superhero from '../../assets/homepage/Superhero.jpg';


export default function CommunitySection({content }) {
  const listItems = content.map(c => (
    <Row>
       <div
        style={{
          fontSize: "40px",
          color: "#D74B83",
          fontWeight: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }} fluid
      >
         <headingStyle>{c[0]}</headingStyle>
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
       <descriptionStyle> {c[1]}</descriptionStyle>
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
  