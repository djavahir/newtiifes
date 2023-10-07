import { Box, Boxx, Container, H1, Logo, Wrapper } from "./styled"
import Tosh from "../../assets/icons/Tashkent.jpg"
import { P } from "../Contact/style"

const Location = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <P style={{fontSize:"50px"}}>Локации</P>
          <H1>Ташкентская область</H1>
        </Box>
        <Boxx>
          <p style={{color:"white",fontSize:"15px",width:"748px",lineHeight:"32px",fontWeight:"500"}}>Расположена на северо-западе Узбекистана, между частью Тянь-Шанских гор и рекой Сырдарья. Удобное географическое расположение говорит о большом экотуристическом потенциале области.Особого внимания заслуживают районы и города Бостанлык, Паркент, Зангиота, Ангрен и Алмалык, которые являются лидерами в сфере туризма. Чарвакское водохранилице, Угам-Чаткальский природный парк и всесезонный горный курорт Амирсой- что может быть лучше для того чтобы вдохновляться красотой природы.<br/><br/>Адрес:<span style={{color:"#EBAD2D",fontSize:"18px"}}>  г. Ташкент ул. Чиланзар 1А, 100027</span></p>
        <Logo src={Tosh}/>
        </Boxx>
      </Container>
    </Wrapper>
  )
}

export default Location