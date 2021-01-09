import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heading from "../heading/heading.components";
import {Content,Title,Alignment, Spacing} from "./textcard.styles"

export default function TextCard({ heading, content }) {
  const listItems = content.map(item => (
    <Col md={3}>
    <Container>
      <Image
        src={item[2]}
        fluid
      />
      </Container>
      <Title>
        {item[0]}
      </Title>
      <Content>
      {item[1]}
      </Content>
    </Col>
  ));
  return (
      <Alignment>
    <Container>
      <Heading heading={heading} />
      <Spacing>
      <Row>
        {listItems}
      </Row>
      </Spacing>
    </Container>
    </Alignment>
  );
}