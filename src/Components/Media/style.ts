import styled from "styled-components";
import { Select } from 'antd';


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

const AntSelect=styled(Select)`
.ant-select-selector {
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
    width: 250px !important;
    font-size: 20px !important;
    
}
`
const PhotoWrap=styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const VideoWrap=styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const Photo=styled.div`
display: flex;
justify-content: space-between;
`
const Larges=styled.div`
display: flex;
gap: 43px;
`
const PhotoBox=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
const A =styled.a`
color: white;
font-size: 18px;
&:hover{
    color: #EBAD2D !important;
    transform: scale(1.1);
    
}
`
const Box=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #8E8E8E;
padding-bottom: 10px;
`

const VideoTag =styled.video`
width: ${({min})=>min?'220px':"440px"};
height: ${({min})=>min?'128px':"264px"};
`


export {Wrapper,PhotoWrap,VideoTag,PhotoBox,Larges,Photo,Box,A,VideoWrap,AntSelect,Container}