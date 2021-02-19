import styled from "styled-components";

export const Title = styled.p`
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const CardHolder = styled.div`
  margin-bottom: 2rem;
  margin: 1rem 2rem;
  text-align: left;
`;

export const Subtitle = styled.p`
  color: #777;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const IconText = styled.p`
  display: inline;
  font-size: 0.75rem;
  color: #000;
  margin-left: 0.5rem;
`;

export const IconImg = styled.img`
  width: 1.5rem;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const Img = styled.img`
  width: 80%;
  padding: 2rem 0 0 0;
  margin: 0 auto;
  border-radius: 10px 10px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10rem;
  height: 3.5rem;
  font-size: 1rem;
  background-color: #f05680;
  color: white;
  border: none;
  border-radius: 15px 0;
  :focus {
    outline: none;
  }
`;
