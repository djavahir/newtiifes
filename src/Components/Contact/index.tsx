import { Box, Container, Img, P, Wrap, Wrapper } from "./style";
import Insta from "../../assets/icons/insta.png"
import Tg from "../../assets/icons/tg.png"
import Face from "../../assets/icons/facebook.png"
import You from "../../assets/icons/you.png"


const Contact = () => {
 
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",paddingRight:"130px"}}>
         <h1 style={{ color: "white", fontSize: "40px", lineHeight: "48px" }}>Контакты</h1>
        </div>
        <Wrap>
          <Box>
            <h1 style={{color:"white",fontSize:"24px"}}>Телефоны:</h1>
            <P href="">+998 99 999 99 99</P>
          </Box>
          <Box>
            <h1 style={{color:"white",fontSize:"24px"}}>Эл.почта:</h1>
            <P href="">@Tiffest123.@gmail.com</P>
          </Box>
          <Box>
            <h1 style={{color:"white",fontSize:"24px"}}>Соц. сеть:</h1>
            <P href=""><Img src={Insta} alt="" />Instagram</P>
            <P href=""><Img src={Tg} alt="" />Telegram</P>
            <P href=""><Img src={Face} alt="" />Facebook</P>
            <P href=""><Img src={You} alt="" />Yotube</P>
          </Box>
          <Box>
            <h1 style={{color:"white",fontSize:"24px"}}>Адрес:</h1>
            <P href="">+г. Ташкент ул. Чиланзар 1А, 100027</P>
          </Box>
        </Wrap>
        
      </Container>
    </Wrapper>
  );
};

export default Contact;
