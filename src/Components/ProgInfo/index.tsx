import { Box, Container, Icon, Wrapper } from "./style";
import Arrow from "../../assets/icons/Arrow 11.svg";

const ProgInfo = () => {
  return (
    <Wrapper>
      <Container>
        <p style={{ color: "white",fontSize:"20px" }}>20 сениябир 2022 год</p>
        <Box bot>
          <p style={{ color: "white",fontSize:"16px" }}>Количество событие:</p>
          <p style={{ color: "white",fontSize:"16px" }}>16</p>
        </Box>
        <Box>
          <a
            style={{ fontSize: "16px", lineHeight: "24px", color: "#EBAD2D" }}
            href=""
          >
            Показать события{" "}
          </a>
          <Icon src={Arrow} />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ProgInfo;
