import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Image} from "react-bootstrap";
import { BoxBackground } from "../Acknowledgement/acknowledgement.styles";
import Heading from "../Heading/heading.components";

export default function Acknowledgement({ heading }) {
  return (<BoxBackground>
      <Container fluid>
          <Heading heading={heading}/>
          <Image src="https://imgur.com/fao8Z3a.jpg" style={{marginBottom:"4rem"}} fluid/>
    </Container>
    </BoxBackground>
  );
}