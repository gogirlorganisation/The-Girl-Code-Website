import styled from "styled-components";

export const Background = styled.div`
  text-align: center;
  padding: 3rem 4rem 6rem 4rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const BoxText = styled.p`
  font-weight: 400;
  margin-top: 2rem;
  line-height: 165.24%;
  @media screen and (min-width: 767px) {
    font-size: 1.125rem;
    padding: 0 12rem;
  }
`;

export const Input = styled.input`
  width: 35rem;
  padding-left: 0.5rem;
  height: 2.5rem;
  font-size: 0.8rem;
  border-radius: 8px;
  border: 2px solid #ffcfe1;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 560px) {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 35rem;
  height: 2.5rem;
  text-align: left;
  font-size: 0.7rem;
  background: white;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.21);
  border: transparent;
  @media screen and (max-width: 560px) {
    margin-bottom: 0.5rem;
    background: #d74b83;
    color: white;
    width: 100%;
  }
`;

export const BoxImage = styled.div`
  display: inline-block;
  width: 35rem;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
