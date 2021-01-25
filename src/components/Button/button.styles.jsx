import styled from "styled-components";

export const ButtonStyle=styled.div`
          display: inline-flex;
          flex-grow: 0;
          width: auto;
        font-weight: 600;
        color: #F05680;
        font-size:18px;
        border-width: 2px;
        border-color: #ffff;
        padding: 20px 100px;
        border-radius: 5px;
        letter-spacing: 2px;
        box-shadow: 0 3px 4px #F05680;
        &:hover {
          background-color: #F05680;
          color: #fff;
          border-color: #F05680;
          font-weight: 700;
        }
        @media screen and (max-width:768px) {
          margin-left: 2rem;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          font-size: 1rem;
        }
`