import ImgAbout from "./components/ImgAbout/ImgAbout";
import TitleAbout from "./components/TitleAbout/TitleAbout";
import {Body, Container, Title, Desc} from "./StyleAbout";

function About() {
  return (
          <Container>
              <Title>get to know</Title>
              <Desc>about me</Desc>
            <Body>
              <ImgAbout/>
              <TitleAbout/>
            </Body>
          </Container>
  )
}

export default About;