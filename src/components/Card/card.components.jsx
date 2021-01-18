import React from "react";

import { Card as CardComp, Button, Container } from "react-bootstrap";
const Card = ({
  image,
  title,
  subtitle,
  iconUrls,
  iconText,
  description,
  isButton,
}) => {
  return (
    <Container>
      <CardComp style={{ width: "24rem", borderRadius: "10px" }}>
        <CardComp.Img
          variant="top"
          src={image}
          style={{
            maxWidth: "20rem",
            padding: "2rem 1rem 0 1rem",
            margin: "0 auto",
          }}
        />
        <CardComp.Body>
          <CardComp.Title>{title}</CardComp.Title>
          <CardComp.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardComp.Text>
          <Button variant="primary">Go somewhere</Button>
        </CardComp.Body>
      </CardComp>
    </Container>
  );
};

export default Card;
