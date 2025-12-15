import Image, { StaticImageData } from "next/image";

import {  Wrapper, Title, LinkProfile} from "./StylesContact";

type ServiceProps = {
    image: StaticImageData;
    title: string,
    link: string,
}

function Contact({image, title, link}:ServiceProps){
    return (
    <Wrapper>
      <LinkProfile href={link} target="_blank">
        <Image src={image} alt={title} width={30} height={30} />
        <Title>{title}</Title>
      </LinkProfile>
    </Wrapper>
  );
}

export default Contact;