import { AntdSelect, Container, Sviper, SviperSlide, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../Card";


const Wait = () => {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1 style={{ color: "white", fontSize: "40px", lineHeight: "48px" }}>Кинопоказы</h1>
         <div style={{display:"flex",gap:"200px",width:"600px"}}>
         <AntdSelect labelInValue defaultValue={{ value: 'Все', label: 'Все' }} style={{ width: 120 }} onChange={handleChange} options={[ { value: 'Австрийская Республика', label: 'Австрийская Республика', }, { value: 'Азербайджанская Республика', label: 'Азербайджанская Республика', }, ]} />
         <AntdSelect labelInValue defaultValue={{ value: 'Скачать', label: 'Скачать' }} style={{ width: 120 }} onChange={handleChange} options={[ { value: 'РЕПЕРТУАРНЫЙ ПЛАН КИНОПОКАЗОВ В КИНОТЕАТРАХ ТАШКЕНТА', label: 'РЕПЕРТУАРНЫЙ ПЛАН КИНОПОКАЗОВ В КИНОТЕАТРАХ ТАШКЕНТА', } ]} />
         </div>
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
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
          <SviperSlide><Card /></SviperSlide>
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default Wait;
