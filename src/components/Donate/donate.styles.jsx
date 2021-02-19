import styled from "styled-components";

export const Background=styled.div`
text-align: center;
padding-top: 0.5rem;
padding-bottom: 3rem;
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
font-size:30px;
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
font-size:18px;
padding-right:5rem;
padding-bottom:1rem;
@media screen and (max-width:992px) {
     font-size: 18px;
}
@media screen and (max-width:786px) {
   padding-left:2rem;
   }
`
