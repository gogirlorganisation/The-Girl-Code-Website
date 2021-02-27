import styled from "styled-components";
import { Button, Container, Row, Image} from 'react-bootstrap';
import Logo from "./../../assets/Logo.png";
import Workshop from "./../../assets/header.png";
import ShadowButton from "../../components/Button/button.component";

export const StyledJumbo = styled(Container)` 
    padding-top: 100px;
    padding-bottom: 100px;
`
export const Bord = styled(Row)` 
    margin-bottom: 20px;
`
    
export const StyleHead = styled.div`
    font-weight: bold;
    font-size: 35px;
    color: #F05680;
    margin-left: 10px;
`
export const StylePee = styled.div`
    font-weight: bold;
    font-size: 20px;
    background-color: transparent;
    color: #F05680;
    margin-left:10px;
    margin-bottom:15px;

`
export const HeaderImage = styled(Image)` 
    padding-top: 250px;
    padding-bottom: 250px;
    height: 100vh;
`

export const ImgStyle=styled.div`
    padding-left:5rem;
    margin-left:10rem;
`
export const ChapterHeading=styled.h1`
    color:#F05680;
    font-size:70px;
    font-weight:700;
    padding-top:5rem;
    padding-bottom:3rem;
    margin-right:20rem;
`
export const ButtonBg=styled.div`
    margin-right:20rem;
    margin-bottom:2rem;
`

export const PinkTextBoxDiv = styled.div`
    margin: 5rem 0;
    
`;

export const StatsDiv = styled.div`
    padding: 0;
`;

export const HeadingDiv = styled.div`
    margin-bottom: 3rem;
    text-align: center;
`

export const SuperheroDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 90vh;
    margin: 8rem 8rem;
`

export const SuperHeroTextDiv = styled.div`


`

export const SuperHeroImgDiv = styled.div`
height: 100%;
width: 40vw;
`

export const SuperHeroImg = styled.img`
    height: 100%;
`

export const SocialMediaSection = styled.div`
    text-align: center;
    margin: 6rem 0;
    background-color: #FBEDF3;
    padding: 3rem 0;
`

export const YouTubeSection = styled.div`
    text-align: center;
`;

export const StartAChapterDiv = styled.div`
margin: 6rem 0;
background-color: #FBEDF3;
padding: 3rem 0;
text-align: center;
`;

export const Corousel = styled.div`
margin: 6rem 0;
background-color: #FBEDF3;
padding: 3rem 0;
`;