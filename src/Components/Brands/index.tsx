import { Container,Img, Sviper, SviperSlide, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import Bean from "../../assets/icons/brand.jpg"
import { P } from "../Contact/style";


const Brands = () => {
 
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",paddingRight:"130px"}}>
         <P style={{  fontSize: "40px", lineHeight: "48px" }}>Наши партнеры</P>
        </div>

        <Sviper
          slidesPerView={6}
          centeredSlides={false}
          slidesPerGroupSkip={6}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{ 769: { slidesPerView: 6, slidesPerGroup: 6 } }}
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

export default Brands;
