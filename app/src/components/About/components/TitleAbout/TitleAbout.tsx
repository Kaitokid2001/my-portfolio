"use client";
import { Wrapper, Title, ButtonResume} from "./StylesTitleAbout";

function TitleAbout() {

  return (
        <Wrapper>
          <Title>Hi, I&lsquo;m Huynh Anh Kiet, a passionate fresher developer with a keen interest in ReactJS, NextJS, TypeScript. I am dedicated to honing my skills and continuously improving in the world of software development. My ultimate goal is to evolve into a proficient software engineer who can contribute effectively to innovative projects.</Title>
          <ButtonResume 
            as="a"
            href={`/my-portfolio/Huynh-Anh-Kiet-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer">
              my resume
          </ButtonResume>
        </Wrapper>
  )
}

export default TitleAbout;