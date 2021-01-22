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

export const StatsDiv = styled.div`
    margin: 3rem 0;
`

export const PinkTextBoxDiv = styled.div`
    margin: 1rem 0;
`

export const WhiteBackground = styled.div`
  background-color: white;
  text-align: center;
  padding: 3rem 4rem 6rem 4rem;
  @media screen and (max-width: 560px) {
    padding: 1.5rem 2rem 3rem 2rem;
  }

`;

export const PinkBackground = styled.div`
  background-color: #FBEDF3;
  text-align: center;
  padding: 3rem 4rem 6rem 4rem;
  @media screen and (max-width: 560px) {
    padding: 1.5rem 2rem 3rem 2rem;
  }

`;

export const VideoContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
`;

export const SuperheroDiv = styled.div`
width: 40vw;
height: 40vh;
`;

export const SuperHeroImgDiv = styled.div`
width: 40vw;
height: 40vh;
`;

export const SuperHeroImg = styled.img`


`;

export const SuperHeroTextDiv = styled.div`

`;

