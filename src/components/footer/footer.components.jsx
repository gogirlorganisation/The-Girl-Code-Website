import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Background ,Icons,TextAlign, PartnerStyle, DigiStyle,Tag, FooterEnd} from "./footer.styles";

export default function Footer() {

  return (
      <Background>
    <Container fluid>
        <Row>
          <Col >
              <Row>
                  <TextAlign>
            GirlCode Humanitarian Foundation is a section-8 company registered under the Goverment of India on date 29th November 2017. 
            </TextAlign>
            </Row>
            
            <Row>
                  <TextAlign>
                    Support our mission by donating to us.
                    Click here.
            </TextAlign>
            </Row>
          </Col>
          
          <Col >
              <Row>
                <Col >
              <Icons>
                <Image src="https://imgur.com/n5KLiz1.jpg" fluid/>
                </Icons>
                </Col>
                <Col>
                <Tag>
                @thegirlcode_co
                </Tag>
                </Col>
              </Row>
              <Row>
                <Col>
                <Icons>
                <Image src="https://imgur.com/Etnm8Qc.jpg" fluid/>
                </Icons>
                </Col>
                <Col>
                <Tag>
                @thegirlcode_co
                </Tag>
                </Col>
              </Row>
              <Row>
                <Col>
                <Icons>
                <Image src="https://imgur.com/onm1gvD.jpg" fluid/>
                </Icons>
                </Col>
                <Col>
                <Tag>
                @thegirlcode_co
                </Tag>
                </Col>
              </Row>
          </Col>
          <Col >
          <Container>
          <PartnerStyle>
          <Row>
              Partner 
              </Row>
              </PartnerStyle>
              <Row>
                  <DigiStyle>
              <Image
                src="https://imgur.com/4jfqTl8.jpg"
                fluid
              />
              </DigiStyle>
            </Row>  
          </Container>
          </Col>
          </Row>
          </Container>
          <FooterEnd>
          <Container>
          Copyright @ 2020, Made by Girlcode Humanitarian Foundation
          </Container>
          </FooterEnd>
          </Background>
  );
}
