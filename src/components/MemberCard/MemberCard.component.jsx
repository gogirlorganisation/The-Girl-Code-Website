import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import { NameStyle } from "./MemberCard.styles";

const MemberCard = ({imgUrl, name, designation}) => {
    return (
        <Container className="mt-3">
        <Row>
            <Col xs={{ span: 6, offset: 3 }} md={{span: 3, offset: 4}}>
            <Image src={imgUrl} roundedCircle fluid/>
            <NameStyle className="text-center mt-3 text-uppercase">{name}</NameStyle>
            </Col>
        </Row>
        </Container>
    )
}

export default MemberCard;