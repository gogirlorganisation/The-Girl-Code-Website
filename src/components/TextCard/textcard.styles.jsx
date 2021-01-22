import styled from "styled-components";

export const Title=styled.p`
          font-weight: 700;
          color: #46215F;
          font-size:1.7rem;
          line-height: 144%;
          letter-spacing: 2px;
          
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
        padding-bottom:3rem;}
`

export const Alignment=styled.div`
text-align: center;
`