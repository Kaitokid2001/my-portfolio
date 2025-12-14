import Contact from "./Contact/Contact";
import Input from "./Input/Input";
import { Wrapper, Title, Desc, Body, Icon, TitleIcon } from "./StylesFooter";
import { contact } from "@/app/src/Data/DataContact";

function Footer(){
    return(
        <Wrapper>
            <Title>Get In Touch</Title>
            <Desc>Contact Me</Desc>
            <Body>
                <Input/>
                <Icon>
                    <TitleIcon>Other places</TitleIcon>
                    {contact.map((item, index)=>(
                    < Contact key={index} {...item}/>
                ))}
                </Icon>
            </Body>
        </Wrapper>
    );
}

export default Footer;