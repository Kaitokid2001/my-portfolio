import { StaticImageData } from "next/image";

import { Wrapper} from "./StylesTitleProject";
import IconProject from "../../../Components/IconTitleProject/IconProject";


type ServiceProps = {
    icons: StaticImageData[];
    title: string,
    linkDemo: string;
    linkGit: string;
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
            linkDemo={item.linkDemo}
            linkGit={item.linkGit}
          />
      ))}
        </Wrapper>
  )
}

export default TitleProject;