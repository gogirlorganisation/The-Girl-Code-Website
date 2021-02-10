import React from "react";
import {
  Title,
  Subtitle,
  IconText,
  IconImg,
  Description,
  Img,
  Button,
  CardHolder,
} from "./card.styles";

import { Card as CardComp } from "react-bootstrap";
const Card = ({ icons, image, title, subtitle, description, isButton }) => {
  // const Icons = icons.map((icon) => {
  //   return (

  //   );
  // });
  let icon;
  if (icons) {
    icon = icons.split(" ");
  }
  return (
    <CardHolder>
      <CardComp
        style={{
          width: "24rem",
          maxHeight: "32rem",
          borderRadius: "15px",
          paddingBottom: "4rem",
          margin: "0 auto",
          boxShadow: "0px 0px 5px 2px rgba(71, 71, 71, 0.22)",
          cursor: "pointer",
        }}
      >
        <Img src={image} fluid />
        <CardComp.Body style={{ marginLeft: "1rem" }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <div style={{ margin: "1rem 0" }}>
            <IconImg src={icon[0]} alt={"Workshop"} />{" "}
            <IconText>{icon[1]}</IconText>
          </div>
          {description ? <Description> {description}</Description> : ""}
          {isButton ? <Button>View More</Button> : ""}
        </CardComp.Body>
      </CardComp>
    </CardHolder>
  );
};

export default Card;
