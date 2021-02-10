import React from "react";
import { ButtonStyle } from "./button.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function ShadowButton({ Text }) {
  return (
    <div>
      <Container>
        <ButtonStyle>{Text}</ButtonStyle>
      </Container>
    </div>
  );
}
