import { Logo,SelectWrap, SelectBox, Wrapper, H1,Select, Container, Icon, Icons } from "./styled"
import Tg from "../../assets/icons/tg.png"
import Insta from "../../assets/icons/insta.png"
import Face from "../../assets/icons/facebook.png"
import YouTube from "../../assets/icons/you.png"


const Navbar = () => {
  return (
    <Wrapper>
        <Container>
        <Logo src="https://tiffest.uz/assets/logo-ru-d40dc871.png"/>
        <SelectBox>
         <H1>Yangiliklar</H1>
         <SelectWrap> 
         <Select><option>kino korish</option><option>premyera</option></Select> 
         <Select><option>litsa</option><option>premyera</option></Select> 
         <Select><option>programma</option><option>premyera</option></Select> 
         </SelectWrap>
         <H1>Media</H1>  
         <H1>Tarix</H1>  
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