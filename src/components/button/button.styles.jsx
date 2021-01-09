import styled from "styled-components";

export const ButtonStyle=styled.div`
        font-weight: 600;
        color: #F05680;
        font-size:1.1rem;
        border-width: 2px;
        border-color: #ffff;
        padding: 20px 40px;
        border-radius: 5px;
        letter-spacing: 2;
        margin-right: 1rem;
        box-shadow: -3px 3px 5px #F05680;
        &:hover {
          background-color: #F05680;
          color: #fff;
          border-color: #F05680;
          font-weight: 700;
        }
        @media screen and (max-width:400px) {
          padding: 8px 16px !important;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          font-size: 1rem;
        }
`