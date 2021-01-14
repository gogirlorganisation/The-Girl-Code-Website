import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Background ,Icons,TextAlign, PartnerStyle, FooterEnd} from "./footer.styles";

export default function Footer() {

  return (
      <Background>
    <Container fluid>
        <Row>
          <Col md={5} sm={6}>
                  <TextAlign>
            GirlCode Humanitarian Foundation is a section-8 company registered under the Goverment of India on date 29th November 2017. 
            </TextAlign>
                  <TextAlign>
                    Support our mission by donating to us.
                    Click here.
            </TextAlign>
          </Col>
          
          <Col md={3} sm={3}>
              <Icons>
                  <ul style={{listStyleType:"none"}}>
                      <li style={{margin:"1.4rem 0.1rem 1.6rem 2rem"}}><a style={{color:"white"}} href="#"><Image src="https://imgur.com/n5KLiz1.jpg" style={{marginRight:"2rem",height:"2.3rem"}} fluid/>@thegirlcode_co</a></li>
                      <li style={{margin:"1.4rem 0.1rem 1.6rem 2rem"}}><a style={{color:"white"}} href="#"><Image src="https://imgur.com/Etnm8Qc.jpg" style={{marginRight:"2rem",height:"2.1rem"}} fluid/>@thegirlcode_co</a></li>
                      <li style={{margin:"1.4rem 0.1rem 1.6rem 2rem"}}><a style={{color:"white"}} href="#"><Image src="https://imgur.com/onm1gvD.jpg" style={{marginRight:"2rem",height:"2.5rem"}} fluid/>@thegirlcode_co</a></li>
                  </ul>
                </Icons>
          </Col>
          
          <Col md={3} sm={6} fluid>
          <Container >
          <PartnerStyle>
              Partner 
              </PartnerStyle>
              <Image
              style={{Height:"14rem",marginLeft:"auto",marginRight:"auto",textAlign:"center",display:"table-cell",verticalAlign:"middle"}}
                src="https://imgur.com/4jfqTl8.jpg"
              />
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
