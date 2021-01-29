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
`;

export const PinkBoxDiv = styled.div`
  margin: 3rem 0;
`;

export const ImageBox = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const UpcomingWorkshopsDiv = styled.div`
  margin: 4rem 0;
  text-align: center;
`;

export const PastWorkshopsDiv = styled.div`
  margin-top: 3rem;
  padding: 4rem 0;
  background-color: rgba(215, 75, 131, 0.1);
  text-align: center;
`;

export const CardsDiv = styled.div`
  display: flex;
  margin: 4rem 0;
  text-align: left;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StartChapterSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const DonateSection = styled.div`
  margin-top: 5rem;
  text-align: center;
`;