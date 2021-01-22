import React, { Component } from "react";
// import { Container } from "react-bootstrap";
import {
  BoxText,
  Input,
  Button,
  BoxImage,
  Logo,
  SecondaryButton,
} from "./startchapter.styles";
import Heading from "../Heading/heading.component";
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/plus.png";

class StartChapter extends Component {
  state = {
    searchItems: this.props.searchItems,
    linkedItems: this.props.linkedItems,
  };
  render() {
    return (
      <div>
        <Container style={{ textAlign: "center" }}>
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

          <Button type="submit">
            {" "}
            <Logo
              src={logo}
              alt="Search"
              style={{ width: "1.7rem", margin: "0 0.8rem" }}
            />
            Start your Own Chapter
          </Button>
          <br />
          <BoxImage>
            <Image
              src="https://i.imgur.com/fi5BtZq.png"
              style={{ width: "100%" }}
            />
          </BoxImage>
          <SecondaryButton type="submit">
            Start your Own Chapter
          </SecondaryButton>
        </Container>
      </div>
    );
  }
}

export default StartChapter;