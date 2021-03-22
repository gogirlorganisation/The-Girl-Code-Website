import styled from "styled-components";

export const MainHeading = styled.p`
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 73px;

  color: #f05680;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const HeaderText = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 33px;
  color: #f05680;
  margin: 0 0 3.5rem 0;
`;

export const PinkBoxDiv = styled.div`
  margin: 3rem 0;
`;

export const ImageBox = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const UpcomingWorkshopsDiv = styled.div`
  margin: 4rem 2rem;
  padding-top: 4rem;
  text-align: center;
  @media screen and (min-width: 1200px) {
    padding: 4rem 4rem;
  }
  @media screen and (min-width: 1500px) {
    padding: 4rem 15rem;
  }
`;

export const PastWorkshopsDiv = styled.div`
  background-color: rgba(215, 75, 131, 0.1);
  text-align: center;
  margin: 4rem 2rem;
  padding-top: 4rem;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 4rem 4rem;
  }
  @media screen and (min-width: 1500px) {
    padding: 4rem 15rem;
  }
`;

export const StartChapterSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const DonateSection = styled.div`
  text-align: center;
  border-top: 3px pink solid;
  padding: 3rem 0 0 0;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem 0 0 10vw;
`;

export const CardsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ShowMoreButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 1rem;
  margin: 1rem 0 0 70vw;
  text-decoration: none;
  color: grey;
  background: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
