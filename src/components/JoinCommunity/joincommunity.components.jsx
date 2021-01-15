import React from "react";
import { Background } from "../StartChapter/startchapter.styles";
import { TextBox, ImageBox, FormBox } from "./joincommunity.styles";
import Form from "./form";
import Heading from "../Heading/heading.components";
import "./joincommunity.styles";
import { Col, Row, Image } from "react-bootstrap";

export default function JoinCommunity() {
  return (
    <div>
      <Background>
        <Heading heading="JOIN OUR COMMUNITY" />
        <Row>
          <Col xs={12} md={6}>
            <TextBox>
              At The Girl Code, we aim to bridge the gender gap in the tech
              community by inspiring young girls to learn programming by hosting
              workshops at schools and universities local to them. Through our
              platform and intuitive curriculum, we plan to give rise to a new
              generation of female programmers set to take the world by storm.
            </TextBox>
          </Col>
          <Col xs={12} md={6}>
            <FormBox>
              <ImageBox>
                <Image src="https://i.imgur.com/KfG7TWC.png" fluid />
              </ImageBox>
              <Form />
            </FormBox>
          </Col>
        </Row>
      </Background>
    </div>
  );
}
