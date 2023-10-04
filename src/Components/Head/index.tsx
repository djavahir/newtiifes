import { Container, Img, Imgs, Wrap } from "./style"
import Back from "../../assets/png/bron.svg"
import Banner from "../../assets/png/banner.png"

const Head = () => {
  return (
    <Wrap>
    <Container>
        <Img src={Back}/>
        <div style={{display:"flex",flexDirection:'column',alignItems:"end", gap:'100px'}}>
        <Imgs src="https://tiffest.uz/assets/banner-ru-f96c4b00.png"/>
         <img src={Banner} />
        </div>
    </Container>
    </Wrap>
  )
}

export default Head