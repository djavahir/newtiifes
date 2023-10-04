import styled from "styled-components";

const Wrap=styled.div`
position: relative;
width: 100%;
height: 765px;
background-image: url("https://www.tiffest.uz/assets/main-bg-2674f033.png");
display: flex;
justify-content: center;
align-items: center;
`

const Container=styled.div`
max-width: 1480px;
width: 100%;
height: 100%;
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
`
const Img =styled.img`
height: 765px;
`
const Imgs =styled.img`
height: 300px;
`

export {Container,Imgs,Wrap,Img}