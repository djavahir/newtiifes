import { Logo,SelectWrap, SelectBox, Wrapper, Select, Container, Icon, Icons } from "./styled"
import Tg from "../../assets/icons/tg.png"
import Insta from "../../assets/icons/insta.png"
import Face from "../../assets/icons/facebook.png"
import YouTube from "../../assets/icons/you.png"
import { P } from "../Contact/style"


const Navbar = () => {
  return (
    <Wrapper>
        <Container>
        <Logo src="https://tiffest.uz/assets/logo-ru-d40dc871.png"/>
        <SelectBox>
         <P>Новости</P>
         <SelectWrap> 
         <Select name="kino" id="kino"><option value={'Кинопоказы'}>Кинопоказы</option></Select> 
         <Select name="kino" id="kino"><option value={'Лица'}>Лица</option></Select> 
         <Select name="kino" id="kino"><option value={'Программа'}>Программа</option></Select> 
         </SelectWrap>
         <P>Медиа</P>  
         <P>История</P>  
         <P>Локации</P>  
        </SelectBox>
        <Icon>
            <a href=""><Icons src={Face}/></a>
            <a href=""><Icons src={Insta}/></a>
            <a href=""><Icons src={Tg}/></a>
            <a href=""><Icons src={YouTube}/></a>
            <Select pro><option>Ru</option></Select>
        </Icon>
        </Container>
    </Wrapper>
  )
}

export default Navbar