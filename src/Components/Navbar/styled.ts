import styled from "styled-components";

const Wrapper=styled.div`
background:black;
color: white;
width: 100%;
height: 150px;
display: flex;
justify-content: center;
gap: 30px;

`

const Container=styled.div`
align-items: center;
max-width: 1480px;
width: 100%;
display: flex;
justify-content: space-between;
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
const H1 =styled.div`
color: white;
font-size: 20px;
&:hover{
    border-bottom: 2px solid yellow;
}
`
const Select =styled.select`
color: white;
background: none;
font-size: 20px;
border:  ${({ pro }) => pro?"1px solid white": 'none'};

`



export {Wrapper,Icon,Icons,SelectWrap,Logo,Container,SelectBox,H1,Select}
// vghbjk