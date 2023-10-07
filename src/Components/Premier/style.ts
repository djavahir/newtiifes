import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Select } from 'antd';


const Wrapper=styled.div`
width: 100%;
padding:100px 0;
background-position: center center;
background-size: 100%;
background-color: #181818;
background-image: url(" https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg");
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

const Sviper=styled(Swiper)`
width: 100%;
height: 100%;
padding: 10px 0;
.swiper-button-prev{
    width: 50px;
    height: 50px;
    background: #575757;
    color: #8E8E8E;
    border-radius: 50%;
    border: none;
}
.swiper-button-prev:hover{
    border: 1px solid #EBAD2D;
    color: #EBAD2D;
}
.swiper-button-next{
    width: 50px;
    height: 50px;
    background: #575757;
    color: #8E8E8E;
    border-radius: 50%;
    border: none;
}
.swiper-button-next:hover{
    border: 1px solid #EBAD2D;
    color: #EBAD2D;
}
`
const SviperSlide=styled(SwiperSlide)`
display: flex;
justify-content: center;
align-items: center;
`
const AntdSelect=styled(Select)`
.ant-select-selector {
    height: 44px !important;
    background: #181818 !important;
    display: flex !important;
    align-items: center !important;
    color: white !important;
    width: 250px !important;
    
}
`
const Img =styled.img`
width: 318px;
height: 400px;
position: relative;
border-radius: 5px;
&:hover{

    transform: scale(1.1);
}
`

export {Wrapper,Sviper,Img,AntdSelect,SviperSlide,Container}