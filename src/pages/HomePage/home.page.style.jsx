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
    
export const StyleHead = styled.div`
    font-weight: bold;
    font-size: 25px;
    background-color: transparent;
    color: white;
    text-align: center;
`
export const StylePee = styled.div`
    font-weight: bold;
    font-size: 17px;
    background-color: transparent;
    color: white;
    text-align: center;
`

export const StyledRow = styled(Row)`
    background-color: transparent;
`
export const StyledContainer = styled(Container)`
    background-color: transparent;
`
export const StyledButtonOne = styled(Button)`
    font-weight: bold;
    font-size: 13px;
    padding: 10px 60px 10px 60px;
    margin: 0px 25px 0px 0px;

    @media (max-width: 768px) {
        padding: 10px 20px 10px 20px;
        margin: 0px 10px 10px 0px;

    }
`
export const StyledButtonTwo = styled(Button)`
    font-weight: bold;
    font-size: 13px;
    padding: 10px 50px 10px 50px;
    margin: 0px 0px 0px 25px;

    @media (max-width: 768px) {
        padding: 10px 10px 10px 10px;
        margin: 0px 0px 10px 10px;

    }
`