import Image, { StaticImageData } from "next/image";

import {  Wrapper, Title} from "./StylesContact";

type ServiceProps = {
    image: StaticImageData;
    title: string,
}

function Contact({image,title}:ServiceProps){
    return (
    <Wrapper>
      <Image src={image} alt={title} width={30} height={30} />
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Contact;