import { Box, Container, Icon, Img, Wrapper } from "./style"
import Person from "../../assets/icons/person.jpg"
import Arrow from "../../assets/icons/Arrow 11.svg"




const Card = () => {
 
      
  return (
    <Wrapper>
      <Img src={Person}/>
      <div style={{display:"flex",flexDirection:"column",gap:"40px",padding:"0 20px"}}>
      <h1 style={{fontSize:"16px",color:"white",lineHeight:"24px",fontWeight:"normal"}}>Алдияр Байракимов, режиссер нашумевшего казахского фильма «Паралимпиец»:</h1>
      <Container>
        <Box>
          <p style={{color:"white",}}>12.04.2023</p>
          <a style={{fontSize:"16px",lineHeight:"24px",color:"#EBAD2D"}} href="">Перейти </a>
        </Box>
        <Icon src={Arrow}/>
      </Container>
      </div>
    </Wrapper>
  )
}

export default Card