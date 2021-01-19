import React from "react";
import {
  Title,
  Subtitle,
  IconText,
  IconImg,
  Description,
  Img,
  Button,
} from "./card.styles";

import { Card as CardComp, Container } from "react-bootstrap";
const Card = ({ image, title, subtitle, icons, description, isButton }) => {
  const Icons = icons.map((icon) => {
    return (
      <div style={{ margin: "1rem 0" }}>
        <IconImg src={icon[0]} alt={icon[1]} /> <IconText>{icon[1]}</IconText>
      </div>
    );
  });

  return (
    <Container>
      <CardComp
        style={{ width: "20rem", borderRadius: "15px", marginBottom: "5rem" }}
      >
        <Img src={image} />
        <CardComp.Body style={{ marginLeft: "0.5rem" }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {Icons}
          {description ? <Description> {description}</Description> : ""}
          {isButton ? <Button>View More</Button> : ""}
        </CardComp.Body>
      </CardComp>
    </Container>
  );
};

export default Card;
