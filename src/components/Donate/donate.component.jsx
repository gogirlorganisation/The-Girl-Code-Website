import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShadowButton from "../Button/button.component";
import { Background, Alignment, Title, Content } from "./donate.styles";

export default function Donate({ button, title, content }) {
  return (
    <Container>
      <Background>
        <Row>
          <Col xs={12} md={4}>
            <Alignment>
              <Image src="https://imgur.com/9UFLhE6.jpg" fluid />
            </Alignment>
          </Col>
          <Col>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Title>{title}</Title>
                  </Row>
                  <Row>
                    <Content>{content}</Content>
                  </Row>
                </Container>
                <Row xs={12}>
                  <ShadowButton Text={'Donate'} />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Background>
    </Container>
  );
}
