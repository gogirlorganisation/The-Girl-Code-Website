import styled from "styled-components";

 export const Background=styled.div`
        background-color: #63379A;
        color: white;
        @media screen and (min-width:768px) {
          padding-top: 3rem;
        }
    
 `
 export const TextAlign=styled.p`
   font-size: 1.25rem;
   line-height: 210%;
   padding-top:0.4rem;
   padding-left:4rem;
   text-align:left;
   @media screen and (max-width:767px) {
     text-align: center;
     font-size: 0.9rem;
   }
 `
 export const Icons=styled.div`
          margin-left:10rem;
          margin-bottom:2.5rem;
          font-size: 1.6rem;
          @media screen and (max-width:767px) {
            margin-left: 1rem;
            margin-right: 1rem;
          }
 `
 export const Tag=styled.div`
  text-align:left;
  margin-right:5rem;
    font-size:1.2rem;
    padding-top:0.8rem;
 
 `
export const PartnerStyle=styled.div`
                font-size: 1.4rem;
                font-weight: 600;
                text-align: center;
                margin-left:11.5rem;
                @media screen and (max-width:767px) {
                  font-size: 1.25rem;
                }
` 
export const DigiStyle=styled.div`
    margin-left:9rem;
`
export const FooterEnd=styled.div`
background:#421F6D;
text-align:center;
margin-top:3rem;
padding-top:1rem;
padding-bottom:1rem;

`