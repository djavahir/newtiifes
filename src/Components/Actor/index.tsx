import { Container,Dropdovn,Img, Spase, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bean from "../../assets/icons/mr.jpg"
import { P } from "../Contact/style";
import { Sviper, SviperSlide } from "../Brands/style";
import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';


// dropdown

const items = [
  {
    label: 'Алжирская Народная Демократическая Республика',
    key: '1',
  },
  {
    label: 'Алжирская Народная Демократическая Республика',
    key: '2',
  },
  {
    label: 'Алжирская Народная Демократическая Республика',
    key: '3',
  },
];


const Actor = () => {
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
         <P style={{ fontSize: "40px", lineHeight: "48px" }}>Лица</P>
         <Dropdovn menu={{ items }} trigger={["click"]}><Spase>Все<DownOutlined /></Spase></Dropdovn>
        </div>

        <Sviper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{ 769: { slidesPerView: 4, slidesPerGroup: 4 } }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
          
        >
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"white",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"80px"}}>Mr.John</h1></SviperSlide>
          
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default Actor;
