"use client";
import TitleHeader from "./components/TitleHeader/TitleHeader";
import {Container, ScrollBar} from "./StyleHeader";

function Hero() {
  
  const handleScroll = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
          <Container>
            <TitleHeader/>
            <ScrollBar onClick={handleScroll}/>
          </Container>
  )
}

export default Hero;