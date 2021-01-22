import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heading from '../Heading/heading.component';
import {  Content, Title, Alignment } from "./textcard.styles";

export default function TextCard({ heading, content }) {
  const listItems = content.map((item) => (
    <Col mx-auto>
      <Container>
          <Image src={item[2]} style={{justifyContent:"center"}} fluid />
      
      <Title>{item[0]}</Title>
      <Content>{item[1]}</Content>
      </Container>
    </Col>
  ));
  return (
    <Alignment>
      <Container>
        <Heading heading={heading} />
        <Row
          style={{
            marginTop: "2rem",
          }}
        >
          {listItems}
        </Row>
      </Container>
    </Alignment>
  );
}
