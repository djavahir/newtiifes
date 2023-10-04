import styled from "styled-components";

const Wrapper=styled.div`
background-image: url("https://cdn.pnghd.pics/data/769/pattern-background-black-50.jpg");
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
/* gap: 0px; */
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