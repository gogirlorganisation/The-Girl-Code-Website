import styled from "styled-components";

export const BoxBackground=styled.div`
        background-color: #fbebf1;
        padding: 3rem 4rem 3rem 4rem;
        margin-top: 6rem;
        margin-bottom: 6rem;
        border-radius:25px;
        @media screen and (min-width:481px) {
        border-radius: 30px;
        }
`
export const BoxHeading=styled.p`
    color:#d74b8d;
    font-weight: 800;
    letter-spacing: 0.145rem;
    font-size: 1.225rem;
    @media screen and (max-width:481px) {
        font-size: 1.125rem;
        margin-left: auto;
        margin-right: auto;}
`
export const BoxText=styled.p`
    font-weight: 400;
    line-height: 165.24%;
    @media screen and (min-width:481px) {
    font-size: 1.125rem;
    }
`