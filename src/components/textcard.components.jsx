import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heading from "../components/heading.components";
import {Icon,Content,Title,Alignment} from "../components/textcard.styles"

export default function TextCard({ heading, content }) {
  const listItems = content.map(item => (
    <Col md={3}>
    <Container>
        <Icon>
      <Image
        src={item[2]}
        fluid
      />
      </Icon>
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
      <Row
        style={{
          marginTop: "7rem",
        }}
      >
        {listItems}
      </Row>
    </Container>
    </Alignment>
  );
}