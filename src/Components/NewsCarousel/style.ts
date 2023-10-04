import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';


const Wrapper=styled.div`
width: 100%;
height: 801px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;

`

const Container=styled.div`
max-width: 1480px;
width: 100%;
height: 546px;
display: flex;
flex-direction: column;
gap: 30px;
`

const Img =styled.img`

`
const Sviper=styled(Swiper)`
width: 100%;
height: 100%;
`
const SviperSlide=styled(SwiperSlide)`
display: flex;
justify-content: center;
align-items: center;
`

export {Wrapper,Sviper,SviperSlide,Container,Img}