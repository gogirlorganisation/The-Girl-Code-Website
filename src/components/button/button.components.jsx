import React from "react";
import {ButtonStyle} from "./button.styles";

export default function Btn({buttonText}) {
  return (
      <div>
    <ButtonStyle>
      {buttonText}
    </ButtonStyle>
    </div>
  );
}