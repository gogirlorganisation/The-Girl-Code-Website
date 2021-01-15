import styled from "styled-components";

export const TextBox = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  text-align: left;
  margin-top: 2rem;
  padding-top: 6rem;
  padding-left: 12rem;
  @media screen and (max-width: 600px) {
    font-size: 1.125rem;
    padding-left: 0;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 2.5rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  background: #fff;
  border: 2px solid #ffcfe1;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
export const ImageBox = styled.div`
  width: 6rem;
  height: 6rem;
  padding-top: 3rem;
  margin-left: 0.5rem;
`;
export const FormBox = styled.div`
  text-align: center;
  margin-left: 10rem;
  @media screen and (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const FormLabel = styled.p`
  color: #555;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  padding-left: 0.2rem;
  text-transform: uppercase;
`;

export const Button = styled.button`
  background-color: #f05680;
  color: #fff;
  font-weight: 800;
  padding: 8px 30px !important;
  border-radius: 2px;
  border-color: transparent;
  :hover {
    background-color: #ee1e6d;
  }
`;
