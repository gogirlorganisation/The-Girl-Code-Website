import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderImage from '../../assets/homepage/Superhero.jpg'


import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ImageCorousel from  "../../components/ImageCorousel/imagecorousel.component";
import ShadowButton from "../../components/Button/button.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";
import Team from "../../components/Team/Team.component";
import TextCard from '../../components/TextCard/textcard.component'
import Heading from "../../components/Heading/heading.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";


import { 

} from "./team.page.styles";

const Header = () => {
    return(
        
    );
};


const IndividualChapter = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar
        bgOut="white"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="white"
      />
    <HeaderBg>
        <Header />
    </HeaderBg>
    </div>
  );
};
export default IndividualChapter;

