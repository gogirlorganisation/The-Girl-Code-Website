import styled from "styled-components";

export const ButtonStyle = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-grow: 0;
  width: auto;
  font-weight: 600;
  color: #f05680;
  font-size: 1.4rem;
  border-width: 2px;
  border-color: #ffff;
  padding: 0.8rem 3rem;
  border-radius: 5px;
  letter-spacing: 2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  box-shadow: 0 3px 4px #f05680;
  &:hover {
    background-color: #f05680;
    color: #fff;
    border-color: #f05680;
    font-weight: 700;
  }
  @media screen and (max-width: 400px) {
    padding: 8px 16px !important;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;
