import { Container,AntSelect, Wrapper,Photo, PhotoWrap,Larges, VideoWrap, Box, A,  PhotoBox, } from "./style";
import Large from "../../assets/icons/large.jpg"
import Mediaa from "../../assets/icons/media.jpg"
import Med from "../../assets/icons/med.jpg"
import Larg from "../../assets/icons/larg.jpg"


import { Image } from 'antd';
import { P } from "../Contact/style";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Media = () => {
  return (
    <Wrapper>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
         <P style={{ fontSize: "40px", lineHeight: "48px" }}>Медиа</P>
         <AntSelect showSearch placeholder="2023 г" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={filterOption} options={[ { value: '2022 г', label: '2022 г', }, { value: '2021 г', label: '2021 г', }, ]} />
        </div>
        <PhotoWrap>
          <Box>
          <p style={{ color: "white",fontSize:"18px" }}>Фотографии</p>
          <A href="">Смотереть</A>
          </Box>
          <Photo>
            <Larges>
              <PhotoBox>
                <Image src={Mediaa}/>
                <Image src={Med}/>
              </PhotoBox>
              <Image src={Large}/>
              <PhotoBox>
                <Image  src={Med}/>
                <Image src={Mediaa}/>
              </PhotoBox>
            </Larges>
            <Larges>
              <Image src={Large}/>
              <PhotoBox>
                <Image src={Mediaa}/>
                <Image src={Med}/>
              </PhotoBox>
              <Image src={Large}/>
            </Larges>
          </Photo>
        </PhotoWrap>
        <VideoWrap>
          <Box>
          <p style={{ color: "white",fontSize:"18px" }}>Видео</p>
          <A href="">Смотереть</A>
          </Box>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <Larges>
              <PhotoBox>
              <img src={Med}/>
              <img src={Med}/>
              </PhotoBox>
              <img style={{width:"460px"}} src={Larg}/>
            </Larges>
            <Larges>
              <PhotoBox>
              <img src={Med}/>
              <img src={Med}/>
              </PhotoBox>
              <img style={{width:"460px"}} src={Larg}/>
            </Larges>
          </div>
        </VideoWrap>
      </Container>
    </Wrapper>
  );
};

export default Media;
