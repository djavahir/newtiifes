import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
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
height: 44px !important;
width: 250px !important;
.ant-select-selector {
    color: white !important;
    background: #181818 !important;
    align-items: center !important;
    
}
.ant-select-arrow{
    color: #8E8E8E;
}
`
const Img =styled.img`
width: 318px;
height: 400px;
position: relative;
border-radius: 5px;
&:hover{
    transition: 1s;
    transform: scale(1.1);
}
`

export {Wrapper,Sviper,Img,AntdSelect,SviperSlide,Container}