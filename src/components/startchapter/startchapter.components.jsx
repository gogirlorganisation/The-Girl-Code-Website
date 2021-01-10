import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import {
  Background,
  BoxText,
  Input,
  Button,
  BoxImage,
} from "./startchapter.styles";
import Heading from "../heading.components";
import { Image } from "react-bootstrap";

class StartChapter extends Component {
  state = {
    searchItems: this.props.searchItems,
    linkedItems: this.props.linkedItems,
  };
  render() {
    return (
      <div>
        <Background>
          <Heading heading={this.props.heading} />
          <BoxText>
            At The Girl Code, we aim to bridge the gender gap in the tech
            community by inspiring young girls to learn programming by hosting
            workshops at schools and universities local to them. Through our
            platform and intuitive curriculum, we plan to give rise to a new
            generation of female programmers set to take the world by storm.
          </BoxText>
          <Input placeholder="Find Chapters Near You" />
          <br />
          <Button>Start your Own Chapter</Button>
          <br />
          <BoxImage>
            <Image
              src="https://i.imgur.com/fi5BtZq.png"
              style={{ width: "100%" }}
            />
          </BoxImage>
        </Background>
      </div>
    );
  }
}

export default StartChapter;
