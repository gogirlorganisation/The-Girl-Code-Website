import styled from "styled-components";

export const BoxBackground=styled.div`
        background-color: #fbebf1;
        padding: 2rem 4rem 2rem 4rem;
        border-radius:25px;
        text-align:center;
        justify-content:center;
        @media screen and (min-width:481px) {
        border-radius: 30px;
        }
`
export const BoxHeading=styled.h2`
    color:#d74b8d;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-size: 18px;
    text-align:center;
    margin:auto;
    padding-bottom:1rem;
`
export const BoxText=styled.p`
    font-weight: 400;
    line-height: 165.24%;
    font-size:22px;
    @media screen and (min-width:481px) {
    font-size: 18px;
    }
`