import {  Container,Img, Sviper, SviperSlide, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import Bean from "../../assets/icons/year.jpg"
import { P } from "../Contact/style";


const Istoriya = () => {
  
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",paddingRight:"130px"}}>
         <P style={{ fontSize: "40px", lineHeight: "48px" }}>История</P>
        </div>

        <Sviper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={3}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{ 769: { slidesPerView: 3, slidesPerGroup: 3 } }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
          
        >
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          <SviperSlide><Img src={Bean}/></SviperSlide>
          
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default Istoriya;
