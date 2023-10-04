import { Container,Sviper, SviperSlide, Wrapper } from "./style"
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "../Card";

const News = () => {
  return (
    <Wrapper>
     <Container>
      <h1 style={{color:"white",fontSize:"40px",lineHeight:"48px"}}>Новости</h1>
      <Sviper  slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup:4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper">
        <SviperSlide><Card/></SviperSlide>
        <SviperSlide><Card/></SviperSlide>
        <SviperSlide><Card/></SviperSlide>
        <SviperSlide><Card/></SviperSlide>
        <SviperSlide><Card/></SviperSlide>  
        <SviperSlide><Card/></SviperSlide>  
        <SviperSlide><Card/></SviperSlide>  
        <SviperSlide><Card/></SviperSlide>  
      </Sviper>
     </Container>
    </Wrapper>
  )
}

export default News