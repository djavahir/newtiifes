import styled from "styled-components";

const Wrapper=styled.div`
background-position: center center;
background-size: 100%;
background-color: #181818;
background-image: url(" https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg");
height: 800PX;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Container=styled.div`
max-width: 1480px;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
`
const Box=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const Boxx=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const H1=styled.div`
color: white;
font-size: 18px;
border-bottom: 1px solid white;
`

const Logo =styled.img`
width: 310px;
height: 264px;
`





export {Wrapper,Logo,H1,Box,Boxx,Container,}