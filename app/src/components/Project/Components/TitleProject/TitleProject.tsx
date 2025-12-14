import { StaticImageData } from "next/image";

import { Body, Wrapper, ButtonDemo, ButtonView} from "./StylesTitleProject";
import IconProject from "../../../Components/IconTitleProject/IconProject";
import { ActivityIcon, GitIcon } from "../../../Components/Icons/Icon";

type ServiceProps = {
    icons: StaticImageData[];
    title: string,
}

type IconProjectsProps = {
  projects: ServiceProps[];
}


function TitleProject({projects}:IconProjectsProps) {
  return (
        <Wrapper>
          {projects.map((item, index) => (
          <IconProject
            key={index}
            icons={item.icons}
            title={item.title}
          />
      ))}
          <Body>
            <ButtonDemo>
              <ActivityIcon/>
              Live demo
            </ButtonDemo>
            <ButtonView>
              <GitIcon/>
              my resume
            </ButtonView>
          </Body>
        </Wrapper>
  )
}

export default TitleProject;