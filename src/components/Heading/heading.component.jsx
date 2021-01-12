import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { Title} from "./heading.styles";

export default function Heading({ heading}) {
  return (
      <Container>
          <Col>
            <Title style={{paddingTop:"4rem",marginBottom:"2rem"}}>
                {heading}
            </Title>
        </Col>
       </Container>
  );
}
