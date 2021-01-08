import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { Title} from "./heading.styles";

export default function Heading({ heading}) {
  return (
      <Container>
          <Col>
            <Title>
                {heading}
            </Title>
        </Col>
       </Container>
  );
}
