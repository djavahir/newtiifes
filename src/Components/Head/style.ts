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
width: 500px;
height: 2790px;
padding-top: 1100px;
`
const Imgs =styled.img`
width: 1000px;
height: 300px;
`

export {Container,Imgs,Wrap,Img}