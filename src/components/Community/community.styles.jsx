import styled from "styled-components";

export const headingStyle=styled.div`
          font-size: 2.8rem;
          color: pink;
          font-weight: 700;
          margin-left: auto;
          margin-right: auto;
          @media screen and (max-width:481px) {
            font-size: 1.7rem;
            text-transform: uppercase;
            font-weight: 600;
          }
`

export const descriptionStyle=styled.div`
         color: grey;
          letter-spacing: 0.115em;
          font-size: 0.95rem;
          text-align: center;
        @media screen and (max-width:481px){
            margin-bottom: 1.5rem;
        }
`