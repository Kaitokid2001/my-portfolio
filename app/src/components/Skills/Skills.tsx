import IconSkills from './Components/IconSkills/IconSkill';
import { Wrapper, Title, Desc } from "./StylesSkill";
import { skills } from "../../Data/DataSkill";

function Skill(){
    return(
        <Wrapper>
            <Title>I have Skills</Title>
            <Desc>My skills & Knowledge</Desc>
            <IconSkills skills={skills}/>
        </Wrapper>
    );
}

export default Skill;