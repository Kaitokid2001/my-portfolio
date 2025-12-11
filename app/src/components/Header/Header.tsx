import ImgHeader from "./components/ImgHeader/ImgHeader";
import TitleHeader from "./components/TitleHeader/TitleHeader";
import {Body, Container} from "./StyleHeader";

function Hero() {
  return (
          <Container>
            <Body>
              <ImgHeader/>
              <TitleHeader/>
            </Body>
          </Container>
  )
}

export default Hero;