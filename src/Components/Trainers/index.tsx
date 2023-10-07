import { AntdSelect, Container,Img, Sviper, SviperSlide, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bean from "../../assets/icons/jyuri.jpeg"
import { P } from "../Contact/style";


const Trainers = () => {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",paddingRight:"130px"}}>
         <P style={{ fontSize: "40px", lineHeight: "48px" }}>Жюри</P>
         <AntdSelect labelInValue defaultValue={{ value: 'Все', label: 'Все' }} style={{ width: 120 }} onChange={handleChange} options={[ { value: 'Австрийская Республика', label: 'Австрийская Республика', }, { value: 'Азербайджанская Республика', label: 'Азербайджанская Республика', }, ]} />
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
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          <SviperSlide><Img src={Bean}/><h1 style={{color:"blue",fontSize:"24px",fontWeight:"500",position:"absolute",bottom:"40px"}}>Полина Гагарина</h1></SviperSlide>
          
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default Trainers;
