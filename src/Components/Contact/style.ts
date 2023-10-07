import styled from "styled-components";

const Wrapper=styled.div`
width: 100%;
padding:100px 0;
background: black;
display: flex;
align-items: center;
justify-content: center;
`

const Container=styled.div`
max-width: 1480px;
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
`
const Wrap=styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
`
const Box=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const P=styled.a`
color: white;
display: flex;
gap: 10px;
font-size: 18px;
position: relative;
cursor: pointer;
&::after{
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -3px;
    transform: scaleX(0);
    background: #EBAD2D;
    transform-origin: 0% 100%;
    transition: .5s ease-in-out;
}
&:hover::after{
    transform: scaleX(1.1);
}
&:hover{
    color: #EBAD2D;
    transition: .7s ease-in-out;
    
}

`
const Img =styled.img`
width: 24px;
height: 24px;
`

export {Wrapper,Wrap,P,Box,Container,Img}