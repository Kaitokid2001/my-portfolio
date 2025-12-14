import { StaticImageData } from "next/image";

import IconTitle from "../../../Components/IconTitleSkill/IconTitle";
import { Wrapper } from "./StylesIconSkill";

type ServiceProps = {
  image: StaticImageData;
  title: string;
};

type IconSkillsProps = {
  skills: ServiceProps[];
}

function IconSkills({ skills }: IconSkillsProps) {
  return (
    <Wrapper>
      {skills.map((item, index) => (
        <IconTitle
          key={index}
          image={item.image}
          title={item.title}
        />
      ))}
    </Wrapper>
  );
}

export default IconSkills;