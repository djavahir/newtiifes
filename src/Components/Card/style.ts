import styled from "styled-components";


const Wrapper=styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 334px;
height: 434px;
background-color: #454545;
gap: 20px;
`

const Container=styled.div`
display: flex;
justify-content: space-between;
`
const Box=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const Img =styled.img`
max-width: 334px;
height: 206px;
width: 100%;
`
const Icon =styled.img`

`

export {Wrapper, Icon,Container,Box,Img}