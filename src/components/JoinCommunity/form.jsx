import React, { Component } from "react";
import { FormLabel, Input, Button } from "./joincommunity.styles";

import { Row, Col, Form } from "react-bootstrap";

class form extends Component {
  state = {
    name: "",
    gender: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  handleSubmit = () => {
    const { name, gender, email } = this.state;

    const formData = {
      name,
      gender,
      email,
    };
    console.log(formData);
  };

  render() {
    return (
      <Form style={{ textAlign: "left" }} onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <FormLabel>Name :</FormLabel>
            <Input
              name="name"
              placeholder="Jane Doe"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Gender :</FormLabel>

            <Input name="gender" as="select" onChange={this.handleChange}>
              <option>Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Email :</FormLabel>
            <Input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Button type="submit">JOIN</Button>
      </Form>
    );
  }
}

export default form;
