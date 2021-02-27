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
  let icon = [];
  if (icons) {
    icon = icons.split(" ");
    console.log(icon);
  }
  return (
    <CardHolder>
      <CardComp
        style={{
          maxHeight: "32rem",
          borderRadius: "15px",
          paddingBottom: "4rem",
          margin: "0 auto",
        }}
      >
        <Img src={image} fluid />
        <CardComp.Body style={{ marginLeft: "1rem" }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <div style={{ margin: "1rem 0" }}>
            {icons ? (
              <>
                <IconImg src={icon[0]} alt={"Workshop"} />
                <IconText>{icon[1]}</IconText>{" "}
              </>
            ) : (
              ""
            )}
          </div>
          {description ? <Description> {description}</Description> : ""}
          {isButton ? <Button>View More</Button> : ""}
        </CardComp.Body>
      </CardComp>
    </CardHolder>
  );
};

export default Card;
