import styled from "styled-components";

const Wrapper=styled.div`
background-image: url("https://www.tiffest.uz/assets/main-bg-2674f033.png");
background: black;
color: white;
width: 100%;
height: 130px;
display: flex;
justify-content: center;
gap: 30px;
`

const Container=styled.div`
align-items: center;
padding: 20px 230px;
width: 100%;
display: flex;
justify-content: space-between;
overflow: hidden;
position: fixed;
top: 0;
z-index: 1000;
background-color: black;
opacity: 0.7;
`

const Logo =styled.img`
width: 80px;
height: 80px;
`
const Icons=styled.img`
width: 20px;
height: 20px;
`
const SelectBox=styled.div`
display: flex;
gap: 80px;
`
const SelectWrap=styled.div`
display: flex;
gap: 60px;
`
const Icon=styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;

`
const Select =styled.select`
color: white;
background: none;
font-size: 20px;
border:  ${({ pro }) => pro?"1px solid white": 'none'};
:hover{
    color: #EBAD2D;
}
`



export {Wrapper,Icon,Icons,SelectWrap,Logo,Container,SelectBox,Select}