import React from "react";
import Stats from "../components/stats/stats.component";
import PinkTextBox from "../components/pinktextbox/pinktextbox.components";
import TextCard from "../components/textcard/textcard.components";
import Donate from "../components/donate/donate.components";
import Footer from "../components/footer/footer.components";
import './homepage.css'

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
          ["WORKSHOPS"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT " ,"https://imgur.com/jCyrXv4.jpg"],
          ["ONLINE"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ", "https://imgur.com/Yh5eL7E.jpg"],
          ["COMMUNITY"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ", "https://imgur.com/mrZQGbn.jpg"],
          ["MENTORS"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ","https://imgur.com/6c5Rvdc.jpg"],
        ]}
      />
      <Donate
      button={"DONATE NOW"}
      title={"Help Support The Girl Code"}
      content={"At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops"}
      />
      <footer>
      <Footer/>
      </footer>
      </body>
    );
  };
  export default Home;
  