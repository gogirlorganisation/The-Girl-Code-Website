import styled from "styled-components"
import { Container, Row, Col, Image } from 'react-bootstrap';


export const Section = styled.div`
    margin-top: 3rem;
    text-align: center;
    background-color: ${({bgColour}) => bgColour};
    padding: 3rem 0;
`