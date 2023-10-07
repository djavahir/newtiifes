import styled from "styled-components";


const Wrapper=styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 453px;
border-radius: 14px;
background-color: #454545;
gap: 20px;
`

const Container=styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 20px 20px;

`
const Box=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: ${({bot})=>bot && "2px solid #8E8E8E"};
`
const Icon =styled.img`

`

export {Wrapper, Icon,Container,Box}