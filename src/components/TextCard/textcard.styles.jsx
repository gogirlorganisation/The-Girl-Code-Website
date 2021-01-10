import styled from "styled-components";

export const Icon=styled.div`
          padding-left: 1rem;
          padding-right: 1rem;
          height: 150px;
          @media screen and (max-width:767px) {
              padding-top:3rem;
          }
`

export const Title=styled.p`
          font-weight: 700;
          color: #46215F;
          font-size:1.7rem;
          line-height: 144%;
          letter-spacing: 2px;
          margin-top: 2rem;
          text-align:center;
    @media screen and (max-width:992px) {
        font-size: 1.45rem;
        margin-left: auto;
        margin-right: auto;}
`
export const Content=styled.p`
    color:#666666;
    font-size:1.2rem;
    
    @media screen and (max-width:992px) {
        font-size: 0.99rem;
        margin-left: auto;
        margin-right: auto;}
`

export const Alignment=styled.div`
text-align: center;
padding-top: 1.5rem;
padding-bottom: 1.5rem;
`