import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Btn from "../Button/button.components";
import {Background,Alignment,Title,Content} from "./donate.styles";

export default function Donate({button,title,content})
{
    return( 
        <Container>
    <Background>    
           
            <Row>
                <Col xs={12} md={4}>
                    <Alignment>
                <Image src="https://imgur.com/9UFLhE6.jpg" fluid />
                </Alignment>
                </Col>
                <Col>
                <Row>
                <Title>
                {title}
                </Title>
                </Row>
                <Row>
                    <Content>
                    {content}
                    </Content>
                </Row>
                <Row xs={12} >
                    <Btn buttonText={button}/>
                </Row>
                </Col>
            </Row>
        </Background>
        </Container>
    );
}