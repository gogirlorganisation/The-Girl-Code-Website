import styled from "styled-components";

 export const Background=styled.div`
        background-color: #63379A;
        color: white;
        @media screen and (min-width:768px) {
          padding-top: 3rem;
        }
    
 `
 export const TextAlign=styled.p`
   font-size: 1.4rem;
   line-height: 210%;
   padding-top:0.4rem;
   padding-left:4rem;
   text-align:left;
   @media screen and (max-width:767px) {
     text-align: center;
     font-size: 1.2rem;
     padding-right:4rem;
   }
                
 `
 export const Icons=styled.div`
          font-size: 1.6rem;
          @media screen and (max-width:1500px) {
            font-size:1.3rem;
          }
        @media screen and (max-width:767px) {
     text-align: center;
     font-size: 1.2rem;
     padding-right:6rem;
   }
 `
export const PartnerStyle=styled.div`
                text-align: center;
                font-size:1.5rem;
                font-weight:650;
                @media screen and (max-width:767px) {
                  font-size: 1.25rem;
                }
` 
export const FooterEnd=styled.div`
background:#421F6D;
text-align:center;
margin-top:3rem;
padding-top:1rem;
padding-bottom:1rem;
`