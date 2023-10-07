import { Buton, Container, Wrapper } from "./style";
import { DownloadOutlined } from '@ant-design/icons';
import ProgInfo from "../ProgInfo"
import { P } from "../Contact/style";



const Programma = () => {
 
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
         <P style={{ fontSize: "40px", lineHeight: "48px" }}>Программа</P>
         <Buton type="primary" icon={<DownloadOutlined />}>Скачать</Buton>
       </div>                                 
        <div style={{display:"flex",flexWrap:"wrap",width:"100%",gap:"60px"}}>
          <ProgInfo/>
          <ProgInfo/>
          <ProgInfo/>
          <ProgInfo/>
          <ProgInfo/>
          <ProgInfo/>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Programma;
