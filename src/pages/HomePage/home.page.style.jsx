import styled from "styled-components";
import { Button, Container, Row } from 'react-bootstrap';
import Logo from "./../../assets/Logo.png";
import Workshop from "./../../assets/header.png";

export const StyledJumbo = styled.div` 
    padding-top: 250px;
    padding-bottom: 250px;
    background-image: url(${Workshop});
    background-size: cover;
    width: 100%;
`
    
export const StyleHead = styled.h2`
    font-weight: bold;
    background-color: transparent;
    color: white;
`
export const StyledRow = styled(Row)`
    background-color: transparent;
`
export const StyledContainer = styled(Container)`
    background-color: transparent;
`
export const StyledButton = styled(Button)`
    width: 200px
`