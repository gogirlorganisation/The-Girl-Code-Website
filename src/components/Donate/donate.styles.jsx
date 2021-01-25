import styled from "styled-components";

export const Background=styled.div`
text-align: center;
padding-top: 1.8rem;
padding-bottom: 1.8rem;
margin-top:40px;
margin-bottom:40px;
`
export const Alignment=styled.div`
padding-top:1.7rem;
@media screen and (max-width:786px) {
    text-align:center;
    justify-content:center;
   }
`
export const Title=styled.h2`
color:#F05680;
font-weight:800;
font-size:38px;
padding-bottom:1.4rem;
@media screen and (max-width:992px) {
     font-size: 30px;
   }
   @media screen and (max-width:786px) {
     margin-top:2rem;
     padding-left:2rem;
     font-size:28px;
   }
`
export const Content=styled.p`
text-align:left;
font-size:22px;
padding-right:5rem;
padding-bottom:1rem;
@media screen and (max-width:992px) {
     font-size: 20px;
}
@media screen and (max-width:786px) {
   padding-left:2rem;
   }
`