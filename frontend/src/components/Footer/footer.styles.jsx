import styled from "styled-components";

 export const Background=styled.div`
        background-color: #63379A;
        color: white;
        @media screen and (min-width:768px) {
          padding-top: 1.5rem;
        }
        @media screen and (max-width:768px) {
          padding-top: 2rem;
        }
    
 `
 export const TextAlign=styled.p`
   font-size: 1.3rem;
   line-height: 210%;
   padding-top:0.4rem;
   padding-left:4rem;
   text-align:left;
   @media screen and (max-width:1200px) {
            font-size:1.2rem;
          }
   @media screen and (max-width:992px) {
     text-align: center;
     font-size: 1.1rem;
     padding-right:4rem;
   }
                
 `
 export const Icons=styled.div`
          font-size: 1.3rem;
          @media screen and (max-width:1200px) {
            font-size:1.3rem;
          }
        @media screen and (max-width:992px) {
     text-align: center;
     font-size: 1.2rem;
     padding-right:6rem;
   }
 `
export const PartnerStyle=styled.div`
                text-align: center;
                font-size:1.3rem;
                font-weight:650;
                @media screen and (max-width:1200px) {
            font-size:1.2rem;
            margin-left:2.5rem;
            margin-top:1.5rem;
          }
                @media screen and (max-width:992px) {
                  font-size: 1.15rem;
                }
` 
export const FooterEnd=styled.div`
background:#421F6D;
text-align:center;
margin-top:0.5rem;
padding-top:0.5rem;
padding-bottom:0.5rem;
`