import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";

import { Container, Row, Col, Image } from "react-bootstrap";
import projectpic from "../../assets/IndWorkshop/projectpic.jpg";

import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import {
  MainHeading,
  HeaderText,
  DonateSection,
  StatsBg,
  HeadingStyle,
  TestimonialBg,
} from "./build.styles";
import Heading from "../../components/Heading/heading.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import Stats from "../../components/Stats/stats.component";
import Card from "../../components/Card/card.component";
import Testimonial from "../../components/Testimonial/testimonial.component";

class BuildActive extends Component {
  state = {};

  fetchData = async () => {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(
      "1L_Etdeh13tOV5BJvodoV7J8rM3HH3lDWt_CYYvLqKrs"
    );

    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo(); // loads document properties and worksheets
    const firstSheet = doc.sheetsByIndex[0];
    const upcomingWorkshops = await firstSheet.getRows();

    const secondSheet = doc.sheetsByIndex[1];
    const pastWorkshops = await secondSheet.getRows();

    // console.log(dataArray);

    // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    // console.log(sheet.title);
    // console.log(sheet.rowCount);

    // // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: "hot new sheet!" });
    // await newSheet.delete();
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
        <Container style={{ paddingTop: "6rem" }}>
          <Row>
            <Col md={5}>
              <MainHeading>BUILD 3.0</MainHeading>
              <HeaderText>It's bigger. It's better. It's back</HeaderText>
            </Col>
            <Col xs={0} md={1} />
            <Col md={6}>
              <Image src={JoinImg} alt="Join Us" fluid />
            </Col>
          </Row>
        </Container>
        <StatsBg>
          <Stats
            stats={[
              ["70", "FLAGSHIP STAT1"],
              ["400+", "FLAGSHIP STAT2"],
              ["35", "FLAGSHIP STAT3"],
            ]}
          />
        </StatsBg>

        <PinkTextBox
          heading={"WHAT IS BUILD"}
          text={
            "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
          }
        />
        <HeadingStyle>
          <Heading heading="COURSES" />
        </HeadingStyle>
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={true}
        />
        <HeadingStyle>
          <Heading heading="PROJECT SHOWCASE" />
        </HeadingStyle>
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        {/* <StayInTouchBg>
            <h4>STAY IN TOUCH</h4>
            <p>Thank you for your interest in #Build. Summer 2020 applications are now closed. If you have already applied, keep your eye on your inbox for updates and for application status. If you'd like to be notified of future opportunities, please enter your email here. </p>
          </StayInTouchBg> */}
        <TestimonialBg>
          <Testimonial
            name="-John Doe"
            text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them."
          />
        </TestimonialBg>

        <HeadingStyle>
          <Heading heading="PAST BUILD BOOTCAMPS" />
        </HeadingStyle>
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        <DonateSection>
          <Donate
            button="DONATE NOW"
            title="Help support The Girl Code"
            content="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
          />
        </DonateSection>
        <Footer />
      </>
    );
  }
}

export default BuildActive;
