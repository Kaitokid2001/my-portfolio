import ImgHeader from "./components/ImgHeader/ImgHeader";
import TitleHeader from "./components/TitleHeader/TitleHeader";
import {Wrapper} from "./StyleHeader";

function Hero() {
  return (
        <Wrapper>
          <ImgHeader/>
          <TitleHeader/>
        </Wrapper>
  )
}

export default Hero;