import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Select } from 'antd';


const Wrapper=styled.div`
width: 100%;
padding:100px 0;
background-image: url("https://cdn.pnghd.pics/data/769/pattern-background-black-50.jpg");
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

export {Wrapper,Sviper,AntdSelect,SviperSlide,Container}