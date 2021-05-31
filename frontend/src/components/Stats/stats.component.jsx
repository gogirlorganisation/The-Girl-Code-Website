import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FlagNum, FlagStat } from "../Stats/stats.styles";

export default function Stats({ stats }) {
  const listItems = stats.map((flag) => (
    <Col key={flag[0]} xs={4} >
      <FlagNum>{flag[0]}</FlagNum>
      <FlagStat>{flag[1]}</FlagStat>
    </Col>
  ));
  return (
    <Container fluid>
      <Row >{listItems}</Row>
    </Container>
  );
}
