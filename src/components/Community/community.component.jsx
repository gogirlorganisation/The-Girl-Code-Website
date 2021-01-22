import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { descriptionStyle, headingStyle } from "./community.styles";


export default function CommunitySection({content }) {
  const listItems = content.map(c => (
    <Row>
       <div
        style={{
          fontSize: "3rem",
          color: "#D74B83",
          fontWeight: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
         <headingStyle>{c[0]}</headingStyle>
      </div>
      <div
        style={{
          color: "#666666",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
       <descriptionStyle> {c[1]}</descriptionStyle>
       </div>
    </Row>
  ));
  return (
    <Container>
      <Row>
        
        <Col md={5} style={{ marginTop: "auto", marginBottom: "auto" }}>
          {listItems}
        </Col>
      </Row>
    </Container>
  );
}
  