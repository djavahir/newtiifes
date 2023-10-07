import styled from "styled-components";
import { Button } from 'antd';

const Wrapper=styled.div`
width: 100%;
padding:100px 0;
background:black;
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
const Buton=styled(Button)`
background: #454545;
`
const Box=styled.div`

`



export {Wrapper,Buton,Box,Container,}