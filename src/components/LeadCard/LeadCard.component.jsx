import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import { NameStyle, DesigStyle } from "./LeadCard.styles";

const LeadCard = ({imgUrl, name, designation}) => {
    return (
        <Container>
        <Row>
            <Col xs={{span: 7}} md={{span: 4}} lg={{span: 3}} className="mx-auto">
            <Image src={imgUrl} roundedCircle fluid/>
            <NameStyle className="text-center mt-3 text-uppercase">{name}</NameStyle>
            <DesigStyle className="text-center text-uppercase">{designation}</DesigStyle>
            </Col>
        </Row>
        </Container>
    )
}

export default LeadCard;
