import React from "react";
import {ButtonStyle} from "./button.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";

export default function ShadowButton({buttonText}) {
  return (
     <div>
        <Container >
    <ButtonStyle>
      {buttonText}
    </ButtonStyle>
    </Container>
    </div>
  );
}