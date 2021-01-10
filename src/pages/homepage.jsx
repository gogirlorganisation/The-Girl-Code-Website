import React from "react";
import NavBar from "../components/NavBar/NavBar.component";
import GlobalStyle from "./globalStyles";
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo.component";
import Stats from "../components/stats.component";
import PinkTextBox from "../components/pinktextbox.components";
import TextCard from "../components/textcard.components";
import StartChapter from "../components/startchapter/startchapter.components";
import "./homepage.css";


const Home = () => {
  return (
    <body>
      <Stats
        stats={[
          ["70", "FLAGSHIP STAT1"],
          ["400+", "FLAGSHIP STAT2"],
          ["35", "FLAGSHIP STAT3"],
        ]}
      />

      <PinkTextBox
        heading={"MISSION"}
        text={
          "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
        }
      />
      <TextCard
        heading={"OUR PROGRAM"}
        headingStyle={"dashed"}
        content={[
          [
            "WORKSHOPS",
            " FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ",
            "https://imgur.com/bswvrl0.jpg",
          ],
          [
            "ONLINE",
            " FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ",
            "https://imgur.com/NATlrgl.jpg",
          ],
          [
            "COMMUNITY",
            " FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ",
            "https://imgur.com/SPY9JRt.jpg",
          ],
          [
            "MENTORS",
            " FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ",
            "https://imgur.com/BH6lGiT.jpg",
          ],
        ]}
      />
      <StartChapter heading={"OUR PROGRAM"} headingStyle={"dashed"} />
    </body>
  );
};
export default Home;

