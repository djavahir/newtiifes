import { Container, Wrapper } from "./style";



const Programma = () => {
  
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",paddingRight:"130px"}}>
         <h1 style={{ color: "white", fontSize: "40px", lineHeight: "48px" }}>Программа</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Programma;
